"use strict";
const mongoose_1 = require('mongoose');
const dbconnect_1 = require('../libs/dbconnect');
var attribute = new mongoose_1.Schema({
    square: Array,
    sqm_price: Array,
    total_price: Array,
    direction: Array,
    bedroom: Array,
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = dbconnect_1.mongoApp.model('Attributes', attribute);
