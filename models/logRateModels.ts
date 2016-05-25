import {Schema} from 'mongoose';
import {mongoLog} from '../libs/dbconnect';
const logRate=new Schema({
    uid:Schema.Types.ObjectId,
    post_id:Schema.Types.ObjectId,
    number:Number
});

export default mongoLog.model('Rates',logRate);
