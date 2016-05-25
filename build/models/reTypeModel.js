"use strict";
const mongoose_1 = require('mongoose');
const dbconnect_1 = require('../libs/dbconnect');
var re_type = new mongoose_1.Schema({
    id: Number,
    name: String,
    type_id: Number
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = dbconnect_1.mongoApp.model('ReType', re_type);
