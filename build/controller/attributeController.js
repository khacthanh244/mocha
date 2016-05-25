"use strict";
const attributeModel_1 = require('../models/attributeModel');
const other_1 = require('../other');
const test1_1 = require('../test1');
function addAtribute(req, res) {
    let cityList = [];
    var errors = [];
    let sqm_price = [], total_price = [], direction_all = [];
    test1_1.priceLevel[1].forEach(function (valPrice) {
        sqm_price.push({ id: valPrice.Name, name: valPrice.Value });
    });
    test1_1.priceLevel[0].forEach(function (valPrices) {
        total_price.push({ id: valPrices.Name, name: valPrices.Value });
    });
    test1_1.directionList.forEach(function (valDirection) {
        direction_all.push({ id: valDirection.value, name: valDirection.name });
    });
    let arr = {
        square: other_1.areaLevel,
        sqm_price: sqm_price,
        total_price: total_price,
        direction: direction_all,
        bedroom: other_1.roomLevel,
    };
    let newAttr = attributeModel_1.default(arr);
    newAttr.save(function (err) {
        if (err)
            errors.push(err);
    });
    res.json({
        rs: true,
        err: errors
    });
}
exports.addAtribute = addAtribute;
