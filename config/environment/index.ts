import * as path from 'path';
import * as lodash from 'lodash';
let all:any = {
    env: process.env.NODE_ENV,
    // root: path.normalize(`${__dirname}/../../..`),
    ip: process.env.IP || '0.0.0.0',
    port: process.env.PORT || 2604,
    secretKey: 'Naiscorpt-OcVang-HieuTran',
    notificationKeyAndroid : 'AIzaSyCWPVmBdDIhEoP33hSPWNMaCVrxaGfhGrI',
    mongo: {
        options: {
            db:{
                safe: true
            }
        }
    }
};
export default lodash.merge(all,all.env ? require(`./${all.env}`).default:{});