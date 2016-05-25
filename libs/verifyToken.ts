import config from '../config/environment';
import {sign,verify} from 'jsonwebtoken';
import { resJsonData } from '../libs';
function getToken(arrdata){
    return sign(arrdata, config.secretKey,{ algorithm: 'HS384'});
}
function verifyToken(req:any,res:any,next:any){
    let token:string = req.body.token || req.params.token || req.headers['x-access-token'];
    console.log(`verify Token User \n ${token}`);
    if(token){
        verify(token, config.secretKey, (err, decoded) =>{
            if (err) {
                res.json(resJsonData(-1,{token:''},'You are not authenticated',''));
                console.log('You are not authenticated!');
            } else {
                // if everything is good, save to request for use in other routes
                req.uid = decoded.uid;
                req.userToken = token;
                req.devToken = decoded.token; //devToken : Device Token 
                next();
            }
        });
    }else{
        res.json(resJsonData(-1,{token:''},'No token provided!',''));
        console.log('No token provided!');
    }
}
export {getToken, verifyToken};