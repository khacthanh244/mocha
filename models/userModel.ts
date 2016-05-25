import {Schema} from 'mongoose';
import {mongoApp} from '../libs/dbconnect';

const user:any = new Schema({
    phone: String,
    password: String,
    address: { 
        name: String, 
        lon: String, 
        lat: String
    },
    profile:{
        name: String,
        birthdate: String,
        status: String,
        avatar: String,
        address: {
            name: String,
            lon: String,
            lat: String
        },
        cover: String,
        sex: String,
    },
    status: Number,
    post_anchor: [{ type: Schema.Types.ObjectId, ref: 'Post' }]
});
export default mongoApp.model('Users',user);