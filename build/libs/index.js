"use strict";
const zlib_1 = require('zlib');
function randomString(len, charSet) {
    charSet = charSet || '0123456789';
    let randomString = '';
    for (let i = 0; i < len; i++) {
        let randomPoz = Math.floor(Math.random() * charSet.length);
        randomString += charSet.substring(randomPoz, randomPoz + 1);
    }
    return randomString;
}
exports.randomString = randomString;
function resJsonData(respond, addval, data, valdata) {
    let result = {
        'respondCode': respond,
        'messager': data,
    };
    if (addval) {
        let items = Object.keys(addval);
        items.forEach((item) => {
            result[item] = addval[item];
        });
    }
    if (valdata) {
        let items = Object.keys(valdata);
        items.forEach((item) => {
            result[item] = valdata[item];
        });
    }
    return result;
}
exports.resJsonData = resJsonData;
function resGzip(res, data) {
    res.writeHead(200, { 'Content-Type': 'application/json', 'charset': 'utf-8', 'Content-Encoding': 'gzip' });
    zlib_1.gzip(JSON.stringify(data), (err, result) => {
        if (err) {
            console.log(err);
        }
        res.end(result);
    });
}
exports.resGzip = resGzip;
