"use strict";
const postModel_1 = require('../models/postModel');
const imageModel_1 = require('../models/imageModel');
const addressModel_1 = require('../models/addressModel');
const dbconnect_1 = require('../libs/dbconnect');
const redis_1 = require('../libs/redis');
const libs_1 = require('../libs');
const buidPost_1 = require('../libs/buidPost');
function pushElasticSearch(req, res) {
    console.log("Vao roi");
    let limit = 10, offset = 0;
    for (offset = 0; offset < 100; offset++) {
        postModel_1.default.find().populate([{
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
            }
            else {
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
                    };
                    dbconnect_1.elastic.create({
                        index: 'ocvang',
                        type: 'post',
                        body: post
                    }, function (error, response) {
                        if (error) {
                            console.log("post " + post.id + " đưa lên elastich Faill! ");
                        }
                        else {
                            console.log("post " + post.id + " đưa lên elastich Success ! ");
                        }
                    });
                });
            }
        });
    }
    res.json({
        result: true
    });
}
exports.pushElasticSearch = pushElasticSearch;
function pushElasticSearchAddPost(result) {
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
    };
    dbconnect_1.elastic.create({
        index: 'ocvang',
        type: 'post',
        body: post
    }, function (error, response) {
        if (error) {
            console.log("post " + post.id + " đưa lên elastich Faill! ");
            return false;
        }
        else {
            console.log("post " + post.id + " đưa lên elastich success! ");
            return true;
        }
    });
}
function getAll(req, res) {
    let limit = req.params.limit ? req.params.limit | 0 : 10, offset = req.params.offset | 0;
    postModel_1.default.find({
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
        if (err)
            res.json(libs_1.resJsonData(-1, {}, ' GET ARTICLE FALSE!', ''));
        let datas = buidPost_1.buidObjectPost(results, 1);
        libs_1.resGzip(res, libs_1.resJsonData(1, {}, 'Success', datas));
    });
}
exports.getAll = getAll;
function getPostAllByUser(req, res) {
    let limit = req.params.limit ? req.params.limit | 0 : 10, offset = req.params.offset | 0, uid = req.uid;
    postModel_1.default.find({ author: uid,
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
        if (err)
            res.json(libs_1.resJsonData(-1, {}, ' GET ARTICLE FALSE!', ''));
        let datas = buidPost_1.buidObjectPost(results, 1);
        libs_1.resGzip(res, libs_1.resJsonData(1, {}, 'Success', datas));
    });
}
exports.getPostAllByUser = getPostAllByUser;
function addPosts(req, res, arrId) {
    let post = {
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
    postModel_1.default.create(post, function (err, result) {
        if (err)
            res.json(libs_1.resJsonData(-1, {}, ' CREATE ARTICLE FALSE!', ''));
        pushElasticSearchAddPost(result);
        res.json(libs_1.resJsonData(1, {}, 'Add Post Success !', ''));
    });
}
function addPost(req, res) {
    if (req.files) {
        let data = [];
        req.files.forEach(function (val) {
            let image = {
                link: val.filename,
                status: 1
            };
            data.push(image);
        });
        imageModel_1.default.collection.insert(data, function (err, arrIds) {
            if (err)
                res.json(libs_1.resJsonData(-1, {}, ' CREATE IMAGES FALSE!', ''));
            addPosts(req, res, arrIds.insertedIds);
        });
    }
    else {
        addPosts(req, res, []);
    }
}
exports.addPost = addPost;
function searchPost(req, res) {
    let title = req.query.title;
    let limit = req.query.limit ? req.query.limit | 0 : 10;
    let page = req.query.offset | 0;
    dbconnect_1.elastic.search({
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
        let PostData = buidPost_1.buidObjectPost(resp.hits.hits, 2);
        libs_1.resGzip(res, libs_1.resJsonData(1, {}, 'Success', PostData));
    }, function (err) {
        if (err)
            res.json(libs_1.resJsonData(-1, {}, ' SEARCH ARTICLE FALSE!', ''));
    });
}
exports.searchPost = searchPost;
function editPost(req, res) {
    postModel_1.default.findById(req.body._id, function (err, postEdit) {
        if (err) {
            if (err)
                res.json(libs_1.resJsonData(-1, {}, ' EDIT ARTICLE FALSE!', ''));
        }
        if (!postEdit) {
            if (err)
                res.json(libs_1.resJsonData(-1, {}, ' NOT FOUND ARTICLE !', ''));
        }
        else {
            postEdit.title = req.body.title;
            postEdit.location = req.body.location;
            postEdit.images = req.body.images;
            postEdit.description = req.body.description;
            postEdit.re_type = req.body.re_type;
            postEdit.address = req.body.address;
            postEdit.attribute = req.body.attribute;
            postEdit.save(function (err) {
                if (err) {
                    res.json(libs_1.resJsonData(-1, {}, ' EDIT ARTICLE FALSE!', ''));
                }
                else {
                    res.json(libs_1.resJsonData(1, {}, ' SUCCESS!', ''));
                }
            });
        }
    });
}
exports.editPost = editPost;
function searchPostArea(req, res) {
    let name = req.query.name;
    let limit = req.query.limit ? req.query.limit | 0 : 1;
    let page = req.query.offset | 0;
    addressModel_1.default.findOne({
        name: name,
        type_id: 1
    }).limit(1).exec(function (err, result) {
        console.log(result);
        if (err)
            res.json(libs_1.resJsonData(-1, {}, ' SEARCH ARTICLE FALSE!', ''));
        if (!result) {
            res.json(libs_1.resJsonData(-1, {}, ' SEARCH ARTICLE NOT FOUND!', ''));
        }
        else {
            let id_city = result.id;
            dbconnect_1.elastic.search({
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
                    res.json(libs_1.resJsonData(-1, {}, ' SEARCH ARTICLE NOT FOUND!', ''));
                }
                else {
                    let PostData = buidPost_1.buidObjectPost(resp.hits.hits, 2);
                    libs_1.resGzip(res, libs_1.resJsonData(1, {}, 'Success', PostData));
                }
            }, function (err) {
                res.json(libs_1.resJsonData(-1, {}, ' SEARCH ARTICLE ERROR!', ''));
            });
        }
    });
}
exports.searchPostArea = searchPostArea;
function addView(req, res) {
    var post_id = req.body.post_id;
    var ip = req.body.ip;
    var key = "VP:" + post_id + ":" + ip;
    redis_1.checkView(key, ip, function (rs) {
        if (rs == 1) {
            postModel_1.default.findOneAndUpdate({ _id: post_id }, {
                $inc: { count_view: 1 }
            }, { new: false }, (err, result) => {
                if (result) {
                    res.json(libs_1.resJsonData(1, {}, ' SUCCESS!', ''));
                }
                else {
                    res.json(libs_1.resJsonData(-1, {}, ' VIEW FALSE!', ''));
                }
            });
        }
        else {
            res.json(libs_1.resJsonData(-1, {}, ' VIEW FALSE!', ''));
        }
    });
}
exports.addView = addView;
