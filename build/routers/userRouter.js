"use strict";
const express_1 = require('express');
const user = require('../controller/userController');
const verifyToken_1 = require('../libs/verifyToken');
const router = express_1.Router();
router.route('/create')
    .post(user.createUserPost)
    .put(verifyToken_1.verifyToken, user.createUserPut)
    .all((req, res, next) => {
    res.sendStatus(404);
});
router.route('/reset/password')
    .post(user.addResetPassword)
    .put(verifyToken_1.verifyToken, user.checkKeyResetPassword)
    .all((req, res, next) => {
    res.sendStatus(404);
});
router.get('/reset/key', verifyToken_1.verifyToken, user.resetSmsKey);
router.get('/notification/:data/key/:key', user.pushNotification);
router.put('/image', user.uploadImages);
router.route('/profile')
    .get(verifyToken_1.verifyToken, user.listProfile)
    .put(user.editProfile)
    .all((req, res, next) => {
    res.sendStatus(404);
});
router.post('/login', user.userLoginPost);
router.post('/logout', verifyToken_1.verifyToken, user.userLogoutPost);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router;
