import {Schema} from 'mongoose';
import {mongoApp} from '../libs/dbconnect';


var address = new Schema({
	id: String,
	name: String,
	type: String,
	province_id: String,
	district_id: Number,
	type_id: Number,    //1 city,2 district,3 ward, 4 la street
});

export default mongoApp.model('Address', address);
