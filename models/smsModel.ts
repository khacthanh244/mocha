import { mysqlSms as sequelize } from '../libs/dbconnect';
import * as DataTypes from 'sequelize';
const sms:any = sequelize.define('mess', {
    mess: DataTypes.TEXT,
    type: DataTypes.INTEGER,
    send: DataTypes.INTEGER,
    time: DataTypes.INTEGER,
    phone: DataTypes.STRING,
    status: DataTypes.INTEGER
}, {
        tableName: 'mess',
        instanceMethods: {
            getOneWhere: (wh: any) => {
                return sms.findOne({ where: wh }, { raw: true });
            },
            upDateWhere: (wh: any, data: any) => {
                return sms.update(data, { where: wh });
            },
            add: (data: any) => {
                return sms.create(data);
            },
        }
    });
export default sms;