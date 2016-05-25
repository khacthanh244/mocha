"use strict";
const express_1 = require('express');
const verifyToken_1 = require('../libs/verifyToken');
const postAnchorController_1 = require('../controller/postAnchorController');
const router = express_1.Router();
router.route('/')
    .post(verifyToken_1.verifyToken, postAnchorController_1.addPostAnchor)
    .put(verifyToken_1.verifyToken, postAnchorController_1.removePostAnchorById)
    .all((req, res, next) => {
    res.sendStatus(404);
});
router.route('/limit/:limit/offset/:offset')
    .get(verifyToken_1.verifyToken, postAnchorController_1.getAllPostAnchorUid)
    .all((req, res, next) => {
    res.sendStatus(404);
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router;
