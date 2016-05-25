"use strict";
const addressModel_1 = require('../models/addressModel');
const projectModel_1 = require('../models/projectModel');
const test1_1 = require('../test1');
const test2_1 = require('../test2');
const test3_1 = require('../test3');
const test4_1 = require('../test4');
var datas = [];
datas.push(test1_1.cityListOTher1);
datas.push(test2_1.default);
datas.push(test3_1.default);
datas.push(test4_1.default);
function addCity(req, res) {
    let cityList = [];
    var errors = [];
    var ii = 0, jj = 0, zz = 0;
    datas.forEach(function (data) {
        data.forEach(function (val) {
            let arr = {
                id: val.code,
                name: val.name,
                type_id: 1
            };
            let newCity = addressModel_1.default(arr);
            newCity.save(function (err) {
                if (err)
                    errors.push(err);
                else {
                    val.district.forEach(function (valdis) {
                        let disarr = {
                            id: valdis.id,
                            name: valdis.name,
                            type: valdis.pre,
                            province_id: val.code,
                            type_id: 2
                        };
                        let newDistrict = addressModel_1.default(disarr);
                        newDistrict.save(function (err) {
                            if (err) {
                                errors.push(err);
                            }
                            else {
                                valdis.ward.forEach(function (valward) {
                                    let disward = {
                                        id: valward.id,
                                        name: valward.name,
                                        type: valward.pre,
                                        district_id: valdis.id,
                                        province_id: val.code,
                                        type_id: 3
                                    };
                                    let newWard = addressModel_1.default(disward);
                                    newWard.save(function (err) {
                                        if (err)
                                            errors.push(err);
                                    });
                                });
                                valdis.street.forEach(function (valStreet) {
                                    let arrStreet = {
                                        id: valStreet.id,
                                        name: valStreet.name,
                                        type: valStreet.pre,
                                        district_id: valdis.id,
                                        province_id: val.code,
                                        type_id: 4
                                    };
                                    let newStreet = addressModel_1.default(arrStreet);
                                    newStreet.save(function (err) {
                                        if (err)
                                            errors.push(err);
                                    });
                                });
                                valdis.project.forEach(function (valProject) {
                                    let arrProject = {
                                        id: valProject.id,
                                        name: valProject.name,
                                        address: {
                                            lat: valProject.lat,
                                            long: valProject.lng,
                                            district_id: valdis.id,
                                            province_id: val.code,
                                        },
                                        cats: valProject.cats,
                                    };
                                    let newProject = projectModel_1.default(arrProject);
                                    newProject.save(function (err) {
                                        if (err)
                                            errors.push(err);
                                    });
                                });
                            }
                        });
                    });
                }
            });
        });
    });
    res.json({
        data: false,
        error: errors
    });
}
exports.addCity = addCity;
function findStreetById(req, res) {
    let id = req.query.id, type_id = 4, district_id = req.query.district_id;
    addressModel_1.default.findOne({ id: id, type_id: type_id, district_id: district_id }, function (err, result) {
        if (err)
            res.json({ data: false });
        else
            res.json({ data: result });
    });
}
exports.findStreetById = findStreetById;
function findStreetAndUpdate(req, res) {
    addressModel_1.default.findOne({ id: req.body.id, type_id: 4 }).exec()
        .then(function (rsAdd) {
        if (!rsAdd) {
            let newAdd = addressModel_1.default({ id: req.body.id, type_id: 4 });
            return newAdd.save();
        }
        else {
            return false;
        }
    }).then(function (result) {
        res.json({
            data: result
        });
    })
        .then(undefined, function (err) {
        console.log(err);
        res.json({
            data: false
        });
    });
}
exports.findStreetAndUpdate = findStreetAndUpdate;
function findStreetAll(req, res) {
    let page = req.query.offset | 0, limit = req.query.limit ? req.query.limit | 0 : 10;
    addressModel_1.default.find({ type_id: 4 }).limit(limit).skip(page * limit).exec(function (err, result) {
        if (err) {
            res.json({ data: false });
        }
        res.json({ data: result });
    });
}
exports.findStreetAll = findStreetAll;
