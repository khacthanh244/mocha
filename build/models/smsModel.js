"use strict";
const dbconnect_1 = require('../libs/dbconnect');
const DataTypes = require('sequelize');
const sms = dbconnect_1.mysqlSms.define('mess', {
    mess: DataTypes.TEXT,
    type: DataTypes.INTEGER,
    send: DataTypes.INTEGER,
    time: DataTypes.INTEGER,
    phone: DataTypes.STRING,
    status: DataTypes.INTEGER
}, {
    tableName: 'mess',
    instanceMethods: {
        getOneWhere: (wh) => {
            return sms.findOne({ where: wh }, { raw: true });
        },
        upDateWhere: (wh, data) => {
            return sms.update(data, { where: wh });
        },
        add: (data) => {
            return sms.create(data);
        },
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = sms;
