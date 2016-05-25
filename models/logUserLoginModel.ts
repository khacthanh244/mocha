import {Schema} from 'mongoose';
import {mongoLog} from '../libs/dbconnect';
const user:any = new Schema({
    uid: String,
    dtoken: String,
    ip: String,
    status: Number
});
export default mongoLog.model('UserLogin',user);