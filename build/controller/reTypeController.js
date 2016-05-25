"use strict";
const reTypeModel_1 = require('../models/reTypeModel');
const test1_1 = require('../test1');
function add(req, res) {
    let cityList = [];
    var errors = [];
    test1_1.cateList.forEach(function (val) {
        let arr = {
            id: val.id,
            name: val.name
        };
        let newRetype = reTypeModel_1.default(arr);
        newRetype.save(function (err) {
            if (err)
                errors.push(err);
            else {
                val.children.forEach(function (valCat) {
                    let disarr = {
                        id: valCat.id,
                        name: valCat.name,
                        type_id: val.id
                    };
                    let newRetypeChild = reTypeModel_1.default(disarr);
                    newRetypeChild.save(function (err) {
                        if (err)
                            errors.push(err);
                    });
                });
            }
        });
    });
    res.json({ rs: true, err: errors });
}
exports.add = add;
