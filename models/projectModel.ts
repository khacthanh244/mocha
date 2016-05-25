import {Schema} from 'mongoose';
import {mongoApp} from '../libs/dbconnect';
var project = new Schema({
	id: Number,
	name: String,
	address: Schema.Types.Mixed,
	cats: Array
});



export default mongoApp.model('Project', project);
