import {Schema} from 'mongoose';
import {mongoLog} from '../libs/dbconnect';
const user:any = new Schema({
    phone: String,
    key: String,
    password: String,
    type: Number,
    status: Number
});
export default mongoLog.model('UserCheck',user);