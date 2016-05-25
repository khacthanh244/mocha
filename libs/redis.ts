import {redis as client} from '../libs/dbconnect';
import { resJsonData } from '../libs';

function setValueRedis(key:string, val:any) {
    client.set(key, val, (err:any, replay:any) => {
        if (err) console.log(`Set Redis Error ${err}`);
        else console.log(`Set Redis Success ${replay}`);
    });
}

function delKeyRedis(key: string) {
    client.del(key, (err:any, replay:any) => {
        if (replay) {
            console.log(`Del Key Resdis \n ${replay}`);
        }else{
            console.log('Del Key Resdis Fail! \n');
        }
    })
}

function loginCheckRedis(req:any, res:any, next:any) {
    let uid:string = req.uid,
        token:string = req.userToken;
    console.log(`uid ${uid} - token ${token} \n`);
    client.get(`uid_${uid}`, (error:any, replay:any) => {
        if (replay) {
            if (token === replay) {
                console.log(`Token ${token} = redis ${replay} \n`);
                next();
            } else {
                res.json(resJsonData(-2, { 'token': '' }, 'User login other device!', ''));
            }
        } else {
            res.json(resJsonData(-1, { 'token': '' }, 'No token, Please login!', ''));
        }
    })
}


//kiem tra key view da ton tai chua
function checkView(key,val, callback) {
    client.exists(key, function (err, reply) {
        if (reply === 1) {
             callback(0);
        } else {
            client.set(key, val, function (err, rl) {
               if (rl === 'OK') {
                   client.expire(key, 86400);
                   callback(1);
               }else{
                   callback(0);
               }
            });
        }
    });
}

export {setValueRedis , delKeyRedis , loginCheckRedis,checkView};