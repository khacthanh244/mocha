"use strict";
const logRateModels_1 = require('../models/logRateModels');
const postModel_1 = require('../models/postModel');
const libs_1 = require('../libs');
function addRate(req, res) {
    if (req.body.post_id && req.body.number) {
        let post_id = req.body.post_id;
        let numberRate = req.body.number;
        let uid = req.uid;
        logRateModels_1.default.findOne({ uid: uid, post_id: post_id })
            .then(function (rs) {
            if (rs) {
                return logRateModels_1.default.update({ uid: uid, post_id: post_id }, { number: numberRate })
                    .then(function (rs1) {
                    if (rs1.nModified == 1) {
                        let incNew = numberRate - rs.number;
                        console.log("He so rate moi " + incNew);
                        return postModel_1.default.findOneAndUpdate({ _id: post_id }, { $inc: { "rate.number": incNew } }, { new: true })
                            .then(function (err1) {
                            return true;
                        });
                    }
                    else {
                        return true;
                    }
                });
            }
            else {
                return logRateModels_1.default.create({ uid: uid, post_id: post_id, number: numberRate })
                    .then(function (rs1) {
                    return postModel_1.default.findOneAndUpdate({ _id: post_id }, { $inc: { "rate.number": numberRate, "rate.total": 1 } }, { new: true })
                        .then(function (rs2) {
                        return true;
                    }).catch(function (err1) {
                        return false;
                    });
                }).catch(function (err1) {
                    return false;
                });
            }
        }).then(function (result) {
            res.json(libs_1.resJsonData(1, {}, ' Success', ''));
        }).catch(function (err) {
            res.json(libs_1.resJsonData(-1, {}, ' FALSE!', ''));
        });
    }
}
exports.addRate = addRate;
