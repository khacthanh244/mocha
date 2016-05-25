import {Schema} from 'mongoose';
import {mongoApp} from '../libs/dbconnect';

var attribute=new Schema({
	square:Array,
	sqm_price:Array,
	total_price:Array,
	direction:Array,
	bedroom:Array,    //1 city,2 district,3 ward, 4 la street
});


export default mongoApp.model('Attributes', attribute);








