"use strict";
const userModel_1 = require('../models/userModel');
const buidPost_1 = require('../libs/buidPost');
const libs_1 = require('../libs');
function addPostAnchor(req, res) {
    let uid = req.uid;
    let post_id = req.body.post_id;
    userModel_1.default.findByIdAndUpdate(uid, { $push: { "post_anchor": post_id } }, { safe: true, upsert: true }, function (err, result) {
        if (result) {
            res.json(libs_1.resJsonData(1, {}, ' Success!', ''));
        }
        else {
            res.json(libs_1.resJsonData(-1, {}, ' ADD Fail!', ''));
        }
    });
}
exports.addPostAnchor = addPostAnchor;
function getAllPostAnchorUid(req, res) {
    let uid = req.uid;
    let limit = req.params.limit ? req.params.limit | 0 : 10;
    let offset = req.params.offset ? req.params.offset | 0 : 0;
    userModel_1.default.findById(uid).populate({
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
    }).exec(function (err, results) {
        if (err) {
            res.json(libs_1.resJsonData(-1, {}, ' Get Fail!', ''));
        }
        if (!results) {
            res.json(libs_1.resJsonData(-1, {}, ' Get Fail!', ''));
        }
        else {
            let datas = buidPost_1.buidObjectPost(results.post_anchor, 3);
            libs_1.resGzip(res, libs_1.resJsonData(1, {}, 'Success', datas));
        }
    });
}
exports.getAllPostAnchorUid = getAllPostAnchorUid;
function removePostAnchorById(req, res) {
    let uid = req.uid;
    let post_id = req.body.post_id;
    userModel_1.default.findByIdAndUpdate(uid, { $pull: { "post_anchor": post_id } }, function (err, result) {
        if (result) {
            res.json(libs_1.resJsonData(1, {}, ' Success!', ''));
        }
        else {
            res.json(libs_1.resJsonData(-1, {}, ' ADD Fail!', ''));
        }
    });
}
exports.removePostAnchorById = removePostAnchorById;
