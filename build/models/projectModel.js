"use strict";
const mongoose_1 = require('mongoose');
const dbconnect_1 = require('../libs/dbconnect');
var project = new mongoose_1.Schema({
    id: Number,
    name: String,
    address: mongoose_1.Schema.Types.Mixed,
    cats: Array
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = dbconnect_1.mongoApp.model('Project', project);
