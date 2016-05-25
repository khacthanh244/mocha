import {Schema} from  'mongoose';
import {mongoApp} from '../libs/dbconnect';

const postAnchor=new Schema({
	post_id: { type: Schema.Types.ObjectId,ref:'Post' },
	uid:{ type:Schema.Types.ObjectId,ref:'Users'}
}) 

export default mongoApp.model('PostAnchor', postAnchor);