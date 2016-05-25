"use strict";
const Sequelize = require('sequelize');
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (config) => {
    const sequelize = new Sequelize(config.mysql.database, config.mysql.user, config.mysql.password, {
        dialect: config.mysql.driver,
        logging: false,
        timezone: 'Asia/Ho_Chi_Minh',
        define: {
            timestamps: false
        }
    });
    return sequelize;
};
