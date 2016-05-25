"use strict";
const multer = require('multer');
let storagePost = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './public/uploads/post/');
    },
    filename: function (req, file, callback) {
        callback(null, Date.now() + '_' + file.originalname);
    }
});
let uploadPost = multer({ storage: storagePost }).array('image', 10);
exports.uploadPost = uploadPost;
