import {Schema} from 'mongoose';
import {mongoApp} from '../libs/dbconnect';
var re_type=new Schema({
	id:Number,
	name:String,
	type_id:Number    //id cha
})


export default mongoApp.model('ReType', re_type);

