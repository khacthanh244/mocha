"use strict";
const lodash = require('lodash');
let all = {
    env: process.env.NODE_ENV,
    ip: process.env.IP || '0.0.0.0',
    port: process.env.PORT || 2604,
    secretKey: 'Naiscorpt-OcVang-HieuTran',
    notificationKeyAndroid: 'AIzaSyCWPVmBdDIhEoP33hSPWNMaCVrxaGfhGrI',
    mongo: {
        options: {
            db: {
                safe: true
            }
        }
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = lodash.merge(all, all.env ? require(`./${all.env}`).default : {});
