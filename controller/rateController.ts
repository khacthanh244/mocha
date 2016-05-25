import rateModel from '../models/logRateModels';
import postModel from '../models/postModel';
import {resJsonData} from '../libs';

function addRate(req: any, res: any) {
    if (req.body.post_id && req.body.number) {
        let post_id: String = req.body.post_id;
        let numberRate: any = req.body.number;
        let uid: String = req.uid;
        rateModel.findOne({ uid: uid, post_id: post_id })
            .then(function (rs) {
                if (rs) {
                    return rateModel.update({ uid: uid, post_id: post_id },
                        { number: numberRate })
                        .then(function (rs1) {
                            if (rs1.nModified == 1) {
                                let incNew = numberRate - rs.number;
                                console.log("He so rate moi " + incNew);
                                return postModel.findOneAndUpdate({ _id: post_id },
                                    { $inc: { "rate.number": incNew } }, { new: true })
                                    .then(function (err1) {
                                        return true;
                                    })
                            }
                            else {
                                return true;
                            }
                        });
                } else {
                    return rateModel.create({ uid: uid, post_id: post_id, number: numberRate })
                        .then(function (rs1) {
                            return postModel.findOneAndUpdate({ _id: post_id }, { $inc: { "rate.number": numberRate, "rate.total": 1 } }, { new: true })
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
                res.json(resJsonData(1, {}, ' Success', ''));
            }).catch(function (err) {
                res.json(resJsonData(-1, {}, ' FALSE!', ''));
            });
    }
}



export {addRate};