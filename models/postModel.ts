import {Schema} from 'mongoose';
import {mongoApp} from '../libs/dbconnect';
const post:any = new Schema({
	//_id:Schema.Types.ObjectId,
	title: String,
	location: Schema.Types.Mixed,
	images: [{
		type: Schema.Types.ObjectId,
		ref: 'Images'
	}],
	description: String,
	re_type: Schema.Types.Mixed,
	address: Schema.Types.Mixed,
	attribute: Schema.Types.Mixed,
	price: String,
	count_share: Number,
	count_view: Number,
	count_rate: Number,
	count_neo: Number,
	author: {
		type: Schema.Types.ObjectId,
		ref: 'Users'
	},
	rate:Schema.Types.Mixed,
	status: Number
})

export default mongoApp.model('Post', post);