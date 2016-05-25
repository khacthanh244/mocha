"use strict";
const mongoose_1 = require('mongoose');
const dbconnect_1 = require('../libs/dbconnect');
var address = new mongoose_1.Schema({
    id: String,
    name: String,
    type: String,
    province_id: String,
    district_id: Number,
    type_id: Number,
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = dbconnect_1.mongoApp.model('Address', address);
