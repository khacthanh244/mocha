"use strict";
const environment_1 = require('../config/environment');
const jsonwebtoken_1 = require('jsonwebtoken');
const libs_1 = require('../libs');
function getToken(arrdata) {
    return jsonwebtoken_1.sign(arrdata, environment_1.default.secretKey, { algorithm: 'HS384' });
}
exports.getToken = getToken;
function verifyToken(req, res, next) {
    let token = req.body.token || req.params.token || req.headers['x-access-token'];
    console.log(`verify Token User \n ${token}`);
    if (token) {
        jsonwebtoken_1.verify(token, environment_1.default.secretKey, (err, decoded) => {
            if (err) {
                res.json(libs_1.resJsonData(-1, { token: '' }, 'You are not authenticated', ''));
                console.log('You are not authenticated!');
            }
            else {
                req.uid = decoded.uid;
                req.userToken = token;
                req.devToken = decoded.token;
                next();
            }
        });
    }
    else {
        res.json(libs_1.resJsonData(-1, { token: '' }, 'No token provided!', ''));
        console.log('No token provided!');
    }
}
exports.verifyToken = verifyToken;
