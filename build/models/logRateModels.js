"use strict";
const mongoose_1 = require('mongoose');
const dbconnect_1 = require('../libs/dbconnect');
const logRate = new mongoose_1.Schema({
    uid: mongoose_1.Schema.Types.ObjectId,
    post_id: mongoose_1.Schema.Types.ObjectId,
    number: Number
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = dbconnect_1.mongoLog.model('Rates', logRate);
