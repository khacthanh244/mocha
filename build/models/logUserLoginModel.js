"use strict";
const mongoose_1 = require('mongoose');
const dbconnect_1 = require('../libs/dbconnect');
const user = new mongoose_1.Schema({
    uid: String,
    dtoken: String,
    ip: String,
    status: Number
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = dbconnect_1.mongoLog.model('UserLogin', user);
