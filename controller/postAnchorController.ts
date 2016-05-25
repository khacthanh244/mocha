import modelUser from '../models/userModel';
import {Types} from  'mongoose';
import {verifyToken} from '../libs/verifyToken';
import {buidObjectPost} from '../libs/buidPost';
import {resJsonData, resGzip} from '../libs';
function addPostAnchor(req: any, res: any) {
	let uid:any = req.uid;
	let post_id: any = req.body.post_id;
	modelUser.findByIdAndUpdate(uid,
		{ $push: { "post_anchor": post_id } },
		{ safe: true, upsert: true },
		function(err, result) {
			if (result) {
				res.json(resJsonData(1, {}, ' Success!', ''));
			}else{
				res.json(resJsonData(-1, {}, ' ADD Fail!', ''));
			}
		}
	);
}

//lay tat ca Post anchor theo uid.sap xep theo thoi gian
function getAllPostAnchorUid(req: any, res: any) {
	let uid: string = req.uid;
	let limit: number = req.params.limit ? req.params.limit | 0 : 10;
	let offset: number = req.params.offset ? req.params.offset | 0 : 0;
	modelUser.findById(uid).populate( {
			path: "post_anchor",
		     populate: [{
					path: 'images',
					model: 'Images'
				},
				 {
					 path: 'author',
					 select: 'profile',
					 model: 'Users'
				 } 
				]
	}).slice('post_anchor', [offset, limit]).sort({
		"_id": 1
	}).exec(function(err, results) {
		if (err) {
			res.json(resJsonData(-1, {}, ' Get Fail!', ''));
		}
		if (!results) {
			res.json(resJsonData(-1, {}, ' Get Fail!', ''));
		} else {

			let datas = buidObjectPost(results.post_anchor, 3);
			resGzip(res, resJsonData(1, {}, 'Success', datas));

		}
	})
}


//xoa post anchor theo uid va post id
function removePostAnchorById(req: any, res: any) {
	let uid: any = req.uid;
	let post_id: any = req.body.post_id;
	modelUser.findByIdAndUpdate(uid,
		{ $pull: { "post_anchor": post_id } },
		function(err, result) {
			if (result) {
				res.json(resJsonData(1, {}, ' Success!', ''));
			} else {
				res.json(resJsonData(-1, {}, ' ADD Fail!', ''));
			}
		}
	);
}



export {
	addPostAnchor,
	getAllPostAnchorUid,
	removePostAnchorById
};