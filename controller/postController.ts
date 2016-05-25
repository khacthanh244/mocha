import modelPost from '../models/postModel';
import modelUsers  from'../models/userModel';
import modelImages from '../models/imageModel';
import modelAddress from '../models/addressModel';
import {elastic}  from '../libs/dbconnect';
import {checkView}  from '../libs/redis';
import {resJsonData, resGzip} from '../libs';
import {daysFormat} from '../libs/date';
import {buidObjectPost} from '../libs/buidPost';
//push lai tat ca len ElasticSearch
function pushElasticSearch(req: any, res: any) {
	console.log("Vao roi");
	let limit = 10,
		offset = 0;
	for (offset = 0; offset < 100; offset++) {
		modelPost.find().populate([{
			path: 'author',
			select: 'profile'
		}, {
				path: "images",
				select: "link"
			}]).limit(limit).skip(limit * offset).exec(function (err, results) {
				if (err) {
					console.log("co loi xay ra");
				}
				if (!results) {
					console.log("het roi");
				} else {
					results.forEach(function (result) {
						let post = {
							id: result._id,
							title: result.title,
							location: {
								lat: result.location.lat,
								lon: result.location.lon
							},
							images: result.images,
							description: result.description,
							re_type: result.re_type,
							address: result.address,
							price: result.price,
							attribute: result.attribute,
							author: result.author,
							date_created: result._id.getTimestamp(),
							count_share: result.count_share,
							count_view: result.count_view,
							rate: result.rate,
							count_neo: result.count_neo,
							status: result.status
						}
						elastic.create({
							index: 'ocvang',
							type: 'post',
							body: post
						}, function (error, response) {
							if (error) {
								console.log("post " + post.id + " đưa lên elastich Faill! ");
							} else {
								console.log("post " + post.id + " đưa lên elastich Success ! ");
							}
						});
					})
				}
			})
	}

	res.json({
		result: true
	});
}

//push bai viet moi len elasticsearch
function pushElasticSearchAddPost(result: any) {
	let post = {
		id: result._id,
		title: result.title,
		location: result.location,
		images: result.images,
		description: result.description,
		price: result.price,
		re_type: result.re_type,
		address: result.address,
		attribute: result.attribute,
		author: result.author,
		count_share: result.count_share,
		count_view: result.count_view,
		count_rate: result.count_rate,
		count_neo: result.count_neo,
		status: result.status
	}
	elastic.create({
		index: 'ocvang',
		type: 'post',
		body: post
	}, function (error, response) {
		if (error) {
			console.log("post " + post.id + " đưa lên elastich Faill! ");
			return false;
		} else {
			console.log("post " + post.id + " đưa lên elastich success! ");
			return true;
		}
	});

}

//lay tat ca bai post moi nhat phan trang
function getAll(req: any, res: any) {

	let limit = req.params.limit ? req.params.limit | 0 : 10,
		offset = req.params.offset | 0;
	modelPost.find({
		status: 1
	}).populate([{
		path: 'author',
		select: 'profile'
	}, {
			path: "images",
			select: "link"
		}]).limit(limit).skip(offset).sort({
			"_id": 1
		}).exec(function (err, results) {
			if (err) res.json(resJsonData(-1, {}, ' GET ARTICLE FALSE!', ''));

			let datas = buidObjectPost(results, 1);
			resGzip(res, resJsonData(1, {}, 'Success', datas));

		})
}


function getPostAllByUser(req: any, res: any) {
	let limit = req.params.limit ? req.params.limit | 0 : 10,
		offset = req.params.offset | 0,
		uid=req.uid;
	modelPost.find({author:uid,
		status: 1
	}).populate([{
		path: 'author',
		select: 'profile'
	}, {
			path: "images",
			select: "link"
		}]).limit(limit).skip(offset).sort({
			"_id": 1
		}).exec(function (err, results) {
			if (err) res.json(resJsonData(-1, {}, ' GET ARTICLE FALSE!', ''));

			let datas = buidObjectPost(results, 1);
			resGzip(res, resJsonData(1, {}, 'Success', datas));

		})
}
//build function add
function addPosts(req: any, res: any, arrId: any[]) {
	let post: any = {
		title: req.body.title,
		location: req.body.location,
		images: arrId,
		description: req.body.description,
		re_type: req.body.re_type,
		address: req.body.address,
		attribute: req.body.attribute,
		author: req.body.author,
		price: req.body.price,
		count_view: 0,
		count_rate: 0,
		count_neo: 0,
		count_share: 0,
		status: 1
	};
	//let postNew = modelPost(post);
	modelPost.create(post, function (err, result) {
		if (err) res.json(resJsonData(-1, {}, ' CREATE ARTICLE FALSE!', ''));

		pushElasticSearchAddPost(result);
		res.json(resJsonData(1, {}, 'Add Post Success !', ''));
	})
}

//them bai viet .Lam dở
function addPost(req: any, res: any) {
	if (req.files) {
		let data = [];
		req.files.forEach(function (val) {
			let image = {
				link: val.filename,
				status: 1
			}

			data.push(image);
		});

		modelImages.collection.insert(data, function (err, arrIds) {
			if (err) res.json(resJsonData(-1, {}, ' CREATE IMAGES FALSE!', ''));
			addPosts(req, res, arrIds.insertedIds)
		});

	} else {
		addPosts(req, res, []);
	}

}

//search title
function searchPost(req: any, res: any) {
	let title = req.query.title;
	let limit = req.query.limit ? req.query.limit | 0 : 10;
	let page = req.query.offset | 0;
	elastic.search({
		index: 'ocvang',
		type: 'post',
		from: page,
		size: limit,
		body: {
			query: {
				"filtered": {
					"query": {
						"match": {
							"title": title
						}
					},
					"filter": {
						"term": {
							"status": 1
						}
					}
				}
			}
		}
	}).then(function (resp) {
		let PostData = buidObjectPost(resp.hits.hits, 2);
		resGzip(res, resJsonData(1, {}, 'Success', PostData));
	}, function (err) {
		if (err) res.json(resJsonData(-1, {}, ' SEARCH ARTICLE FALSE!', ''));
	});
}


function editPost(req: any, res: any) {
	modelPost.findById(req.body._id, function (err, postEdit) {
		if (err) {
			if (err) res.json(resJsonData(-1, {}, ' EDIT ARTICLE FALSE!', ''));
		}
		if (!postEdit) {
			if (err) res.json(resJsonData(-1, {}, ' NOT FOUND ARTICLE !', ''));
		} else {

			postEdit.title = req.body.title;
			postEdit.location = req.body.location;
			postEdit.images = req.body.images;
			postEdit.description = req.body.description;
			postEdit.re_type = req.body.re_type;
			postEdit.address = req.body.address;
			postEdit.attribute = req.body.attribute;
			// save the user
			postEdit.save(function (err) {
				if (err) {
					res.json(resJsonData(-1, {}, ' EDIT ARTICLE FALSE!', ''));
				} else {
					res.json(resJsonData(1, {}, ' SUCCESS!', ''));
				}

			});
		}

	});
}


//Lay post theo tinh thanh.sap xep theo thoi gian
function searchPostArea(req, res) {
	let name = req.query.name;
	let limit = req.query.limit ? req.query.limit | 0 : 1;
	let page = req.query.offset | 0;

	modelAddress.findOne({
		name: name,
		type_id: 1
	}).limit(1).exec(function (err, result) {
		console.log(result);
		if (err) res.json(resJsonData(-1, {}, ' SEARCH ARTICLE FALSE!', ''));

		if (!result) {
			res.json(resJsonData(-1, {}, ' SEARCH ARTICLE NOT FOUND!', ''));
		} else {
			let id_city = result.id;
			elastic.search({
				index: 'ocvang',
				type: 'post',
				from: page,
				size: limit,
				body: {
					"query": {
						"filtered": {
							"query": {
								"match": {
									"address.province_id": id_city
								}
							},
							"filter": {
								"term": {
									"status": 1
								}
							}
						}
					},
					"sort": [{
						"date_created": {
							"order": "desc"
						}
					}]
				}
			}).then(function (resp) {
				if (!resp) {
					res.json(resJsonData(-1, {}, ' SEARCH ARTICLE NOT FOUND!', ''));
				} else {
					//console.log(resp.hits.hits);
					let PostData = buidObjectPost(resp.hits.hits, 2);
					resGzip(res, resJsonData(1, {}, 'Success', PostData));
				}
			}, function (err) {
				res.json(resJsonData(-1, {}, ' SEARCH ARTICLE ERROR!', ''));
			});
		}
	})
}

/*tinh luot view cho bai post .
* Lưu theo dạng SET VP:post_id:ip=time();
* Luu redis kiem tra key chua exit và tạo key 
*/
function addView(req: any, res: any) {
	var post_id: string = req.body.post_id;
    var ip: string = req.body.ip;
    var key = "VP:" + post_id + ":" + ip;
    checkView(key, ip, function (rs: Number) {
		if (rs == 1) {
			modelPost.findOneAndUpdate({ _id: post_id }, {
				$inc: { count_view: 1 }
			}, { new: false }, (err: any, result: any) => {
				if (result) {
					res.json(resJsonData(1, {}, ' SUCCESS!', ''));
				} else {
					res.json(resJsonData(-1, {}, ' VIEW FALSE!', ''));
				}
			})
		} else {
			res.json(resJsonData(-1, {}, ' VIEW FALSE!', ''));
		}
    })
}






export {addPost,searchPost, searchPostArea, pushElasticSearch, getAll, editPost, 
	addView, getPostAllByUser}