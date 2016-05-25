"use strict";
const mongoose_1 = require('mongoose');
const dbconnect_1 = require('../libs/dbconnect');
const user = new mongoose_1.Schema({
    phone: String,
    key: String,
    password: String,
    type: Number,
    status: Number
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = dbconnect_1.mongoLog.model('UserCheck', user);
