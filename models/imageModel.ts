import {Schema} from 'mongoose';
import {mongoApp} from '../libs/dbconnect';


var images = new Schema({
	link: String,
	status: Number
})



export default mongoApp.model('Images', images);




