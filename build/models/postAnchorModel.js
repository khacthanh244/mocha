"use strict";
const mongoose_1 = require('mongoose');
const dbconnect_1 = require('../libs/dbconnect');
const postAnchor = new mongoose_1.Schema({
    post_id: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Post' },
    uid: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Users' }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = dbconnect_1.mongoApp.model('PostAnchor', postAnchor);
