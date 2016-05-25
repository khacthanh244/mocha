import {static} from 'express';
import * as morgan from 'morgan';
import * as bodyParser from 'body-parser';
// import config from './environment';
export default (app: any)=>{
    let env = app.get('env');

    app.set('x-powered-by',false);
    app.use(static(__dirname + './public/uploads/'));
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());

   if(env == 'development'){
       app.use(morgan('dev'));
   }
}