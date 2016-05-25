"use strict";
const mongoose_1 = require('mongoose');
const dbconnect_1 = require('../libs/dbconnect');
const user = new mongoose_1.Schema({
    phone: String,
    password: String,
    address: {
        name: String,
        lon: Number,
        lat: Number
    },
    profile: {
        name: String,
        birthday: String,
        status: String,
        avatar: String,
        address: {
            name: String,
            lon: String,
            lat: String
        },
        cover: String,
        sex: String,
    },
    status: Number,
    post_anchor: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'Post' }]
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = dbconnect_1.mongoApp.model('Users', user);
