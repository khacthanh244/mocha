"use strict";
const express_1 = require('express');
const postController_1 = require('../controller/postController');
const rateController_1 = require('../controller/rateController');
const verifyToken_1 = require('../libs/verifyToken');
const router = express_1.Router();
const uploads_1 = require('../libs/uploads');
router.route('/post')
    .post(uploads_1.uploadPost, verifyToken_1.verifyToken, postController_1.addPost)
    .put(verifyToken_1.verifyToken, postController_1.editPost)
    .all((req, res, next) => {
    res.sendStatus(404);
});
router.route('/elastichpush')
    .get(postController_1.pushElasticSearch)
    .all((req, res, next) => {
    res.sendStatus(404);
});
router.route('/search')
    .get(postController_1.searchPost)
    .all((req, res, next) => {
    res.sendStatus(404);
});
router.route('/limit/:limit/offset/:offset')
    .get(postController_1.getAll)
    .all((req, res, next) => {
    res.sendStatus(404);
});
router.route('/byuser/limit/:limit/offset/:offset')
    .get(verifyToken_1.verifyToken, postController_1.getPostAllByUser)
    .all((req, res, next) => {
    res.sendStatus(404);
});
router.route('/postarea')
    .get(postController_1.searchPostArea)
    .all((req, res, next) => {
    res.sendStatus(404);
});
router.route('/view')
    .put(postController_1.addView)
    .all((req, res, next) => {
    res.sendStatus(404);
});
router.route('/rate')
    .put(verifyToken_1.verifyToken, rateController_1.addRate)
    .all((req, res) => {
    res.sendStatus(404);
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router;
