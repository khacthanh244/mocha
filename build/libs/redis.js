"use strict";
const dbconnect_1 = require('../libs/dbconnect');
const libs_1 = require('../libs');
function setValueRedis(key, val) {
    dbconnect_1.redis.set(key, val, (err, replay) => {
        if (err)
            console.log(`Set Redis Error ${err}`);
        else
            console.log(`Set Redis Success ${replay}`);
    });
}
exports.setValueRedis = setValueRedis;
function delKeyRedis(key) {
    dbconnect_1.redis.del(key, (err, replay) => {
        if (replay) {
            console.log(`Del Key Resdis \n ${replay}`);
        }
        else {
            console.log('Del Key Resdis Fail! \n');
        }
    });
}
exports.delKeyRedis = delKeyRedis;
function loginCheckRedis(req, res, next) {
    let uid = req.uid, token = req.userToken;
    console.log(`uid ${uid} - token ${token} \n`);
    dbconnect_1.redis.get(`uid_${uid}`, (error, replay) => {
        if (replay) {
            if (token === replay) {
                console.log(`Token ${token} = redis ${replay} \n`);
                next();
            }
            else {
                res.json(libs_1.resJsonData(-2, { 'token': '' }, 'User login other device!', ''));
            }
        }
        else {
            res.json(libs_1.resJsonData(-1, { 'token': '' }, 'No token, Please login!', ''));
        }
    });
}
exports.loginCheckRedis = loginCheckRedis;
function checkView(key, val, callback) {
    dbconnect_1.redis.exists(key, function (err, reply) {
        if (reply === 1) {
            callback(0);
        }
        else {
            dbconnect_1.redis.set(key, val, function (err, rl) {
                if (rl === 'OK') {
                    dbconnect_1.redis.expire(key, 86400);
                    callback(1);
                }
                else {
                    callback(0);
                }
            });
        }
    });
}
exports.checkView = checkView;
