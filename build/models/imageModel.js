"use strict";
const mongoose_1 = require('mongoose');
const dbconnect_1 = require('../libs/dbconnect');
var images = new mongoose_1.Schema({
    link: String,
    status: Number
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = dbconnect_1.mongoApp.model('Images', images);
