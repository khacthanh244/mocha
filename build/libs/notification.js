"use strict";
const node_gcm_1 = require('node-gcm');
const environment_1 = require('../config/environment');
function pushAndroid(val, deviceToken) {
    let batchLimit = 1000;
    let message = new node_gcm_1.Message(), sender = new node_gcm_1.Sender(environment_1.default.notificationKeyAndroid);
    message.contentAvailable = 'true';
    let data = {
        title: 'Oc Vang!',
        body: val
    };
    message.addData('data', data);
    for (let start = 0; start < deviceToken.length; start += batchLimit) {
        let slicedTokens = deviceToken.splice(start, start + batchLimit);
        sender.sendNoRetry(message, { registrationTokens: slicedTokens }, (err, response) => {
            console.log('Push notification Android \n');
            if (err) {
                console.error('Error :' + err);
            }
            else {
                console.log('Response :' + JSON.stringify(response));
            }
        });
    }
}
exports.pushAndroid = pushAndroid;
