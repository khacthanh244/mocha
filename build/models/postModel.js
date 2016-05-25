"use strict";
const mongoose_1 = require('mongoose');
const dbconnect_1 = require('../libs/dbconnect');
const post = new mongoose_1.Schema({
    title: String,
    location: mongoose_1.Schema.Types.Mixed,
    images: [{
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'Images'
        }],
    description: String,
    re_type: mongoose_1.Schema.Types.Mixed,
    address: mongoose_1.Schema.Types.Mixed,
    attribute: mongoose_1.Schema.Types.Mixed,
    price: String,
    count_share: Number,
    count_view: Number,
    count_rate: Number,
    count_neo: Number,
    author: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Users'
    },
    rate: mongoose_1.Schema.Types.Mixed,
    status: Number
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = dbconnect_1.mongoApp.model('Post', post);
