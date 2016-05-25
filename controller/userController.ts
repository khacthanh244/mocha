import {
    resJsonData,
    randomString,
    urlUser,
} from '../libs';

import User from '../models/userModel';
import SMS from '../models/smsModel';
import LogUserCheck from '../models/logUserCheckModel';
import LogUserLogin from '../models/logUserLoginModel';
import {getToken} from '../libs/verifyToken';
import {setValueRedis, delKeyRedis} from '../libs/redis';
import {pushAndroid} from '../libs/notification';

function createUserPost(req: any, res: any) {
    let data: Object = {
        user: {
            phone: req.body.phone,
            password: req.body.pass,
            status: 0
        },
        check: {
            phone: req.body.phone,
            password: req.body.pass,
            key: randomString(6),
            type: 0,
            status: 0
        }
    };
    console.log('User Register\n');
    checkUser(req, res, data);
}
function createUserPut(req: any, res: any) {
    let data: Object = {
        phone: req.body.phone,
        key: req.body.key,
        type: 0,
        status: 0
    };
    console.log('Check SMS Key \n');
    console.log(data);
    checkUserLog(req, res, data);
}
function checkUserLog(req: any, res: any, data?: Object, type?: number) {
    LogUserCheck.findOneAndUpdate(data, { $set: { status: 1 } }, 'phone key password',
        (err: any, dbresult: any) => {
            if (dbresult) {
                let obj: Object = {
                    uid: req.uid,
                    dtoken: req.body.dtk,
                    ip: req.body.ip,
                    status: 1
                };
                if (type === 2) {
                    updateUser(req.uid, { password: dbresult.password });
                } else {
                    updateUser(req.uid, { status: 1 });
                }
                addUserLoginLog(obj);
                res.json(resJsonData(1, { token: req.userToken }, 'Key Success'));
                // add Redis Token
                setValueRedis(`uid_${req.uid}`, req.userToken);
            } else {
                res.json(resJsonData(-1, { token: req.userToken }, 'Phone or Key False!'));
            }
        })
}
function updateUser(id: string, data: any) {
    User.update({ _id: id }, { $set: data }, { multi: true }, (err, dbresult) => {
        if (dbresult) {
            console.log('update User Success\n');
        }
    })
}
function addUserLoginLog(data?: any) {
    LogUserLogin.create(data, (err: any, dbresult: any) => {
        if (dbresult) {
            console.log(`add Log User Login \n ${dbresult}`);
        } else {
            console.log('not add Log User Login\n');
        }
    })
}
function checkUser(req: any, res: any, data?: any, type?: number) {
    let p: string = req.body.phone || req.params.phone;
    User.findOne({ phone: p }, 'phone password status', (err: any, dbresult: any) => {
        if (dbresult) {
            let status: number = dbresult.status | 0;
            let token: Object = {
                uid: dbresult._id,
                token: req.body.dtk
            };
            if (status === 0) {
                res.json(resJsonData(-1, { token: getToken(token) }, 'Please Check Key SMS!', ''));
            } else if (status === 1) {
                if (type === 1) {
                    userLogin(req, res, dbresult);
                } else if (type === 2) {
                    console.log('user Reset Password\n');
                    addUserCheck(data);
                    addSMS(data);
                    res.json(resJsonData(1, { token: getToken(token) }, 'Reset Password Success! Please Add Key SMS!', ''));
                } else {
                    res.json(resJsonData(-1, { token: "" }, 'Please Login!', ''));
                }
            } else {
                res.json(resJsonData(-1, { token: "" }, 'Please Login!', ''));
            }
        } else {
            console.log('not User');
            if (type === 1 || type === 2) {
                res.json(resJsonData(-1, { token: "" }, 'Please Register!', ''));
            } else {
                Promise.all([
                    addUsers(req, res, data.user),
                    addUserCheck(data.check),
                    addSMS(data.check),
                ]).then((db) => {
                    console.log('Run Promise User Add Success\n');
                }).catch(error => {
                    console.log(`Run Promise User Fail ${error}`);
                })
            }
        }
    })
}
function addUsers(req: any, res: any, data: any) {
    User.create(data, (err: any, dbresult: any) => {
        if (dbresult) {
            let token: Object = {
                uid: dbresult._id,
                token: req.body.dtk
            };
            res.json(resJsonData(1, { token: getToken(token) }, 'Register Success! Please Add Key SMS!', ''));
        } else {
            console.log('create fails \n');
        }
    })
}
function addSMS(data: any) {
    let datasms: Object = {
        mess: `Ma so kich hoat ung dung OC Vang cua ban la: ${data.key}`,
        type: 0,
        send: 1,
        time: Math.floor(Date.now() / 1000),
        phone: data.phone,
        status: 0
    };
    SMS.build().add(datasms).then((mess) => {
        if (mess.get('id')) {
            console.log('saveSms ' + mess.get('id'));
        } else {
            console.log('save Sms Fails ');
        }
    });
}
function addUserCheck(data: any) {
    LogUserCheck.create(data, (err: any, dbresult: any) => {
        if (dbresult) {
            console.log(dbresult);
        }
    })
}
function userLoginPost(req: any, res: any) {
    checkUser(req, res, '', 1);
}
function userLogin(req: any, res: any, data: any) {
    console.log(data);
    if (req.body.pass === data.password) {
        let obj: Object = {
            uid: data._id,
            dtoken: req.body.dtk,
            ip: req.body.ip,
            status: 1
        };
        checkUserLoginLog(req, res, obj);
    } else {
        res.json(resJsonData(-1, { token: "" }, 'Phone or Password Fail!', ''));
    }
}
function checkUserLoginLog(req: any, res: any, data: any) {
    let token: any = getToken({ uid: data.uid, token: req.body.dtk });
    LogUserLogin.findOneAndUpdate({ uid: data.uid, status: 1 }, { $set: { status: -1 } }, 'uid dtoken status', (err: any, dbresult: any) => {
        if (dbresult) {
            console.log('Check Login Other Device!\n');
            console.log(`uid:${dbresult.uid} \n
            db device: ${dbresult.dtoken} / user device: ${req.body.dtk}\n`);
            addUserLoginLog(data);
            if (dbresult.dtoken !== req.body.dtk) {
                // add Redis Token
                setValueRedis(`uid_${data.uid}`, token);
                pushUserOtherDevice(dbresult.dtoken);
            }
            res.json(resJsonData(1, { token: token }, 'Login Success Other Device!', ''));
        } else {
            res.json(resJsonData(1, { token: token }, 'Login Success!', ''));
            addUserLoginLog(data);
            // add Redis Token
            setValueRedis(`uid_${data.uid}`, token);
        }
    })
}
function pushUserOtherDevice(token: string) {
    let data: Object = {
        'respondCode': -2,
        'messager': 'User login other device!'
    };
    pushAndroid(data, [token]);
}
function userLogoutPost(req: any, res: any) {
    LogUserLogin.findOneAndUpdate({ uid: req.uid, status: 1 }, { $set: { status: -1 } }, 'uid', (err: any, dbresult: any) => {
        if (dbresult) {
            console.log('Log Out \n');
            delKeyRedis(`uid_${req.uid}`);
            res.json(resJsonData(1, { token: "" }, "Logout Success!", ''));
        } else {
            res.json(resJsonData(-1, { token: "" }, "Logout fail!", ''));
        }
    })
}
function pushNotification(req: any, res: any) {
    let key: string = req.params.key
    let data: any = req.params.data || 'Bạn Quên Gởi Data Rồi';
    pushAndroid(data, [key]);
    res.json(resJsonData(1, { token: req.userToken }, "pushNotification Success!"));
}
function addResetPassword(req: any, res: any) {
    let data: Object = {
        phone: req.body.phone,
        password: req.body.pass,
        key: randomString(6),
        type: 1,
        status: 0
    };
    checkUser(req, res, data, 2);
}
function checkKeyResetPassword(req: any, res: any) {
    let data: Object = {
        phone: req.body.phone,
        key: req.body.key,
        type: 1,
        status: 0
    };
    checkUserLog(req, res, data, 2);
}

function resetSmsKey(req: any, res: any) {
    User.findOne({ _id: req.uid }, 'phone', (err: any, dbresult: any) => {
        if (dbresult) {
            let data: any = {
                log: {
                    phone: dbresult.phone,
                    status: 0
                }, sms: {
                    key: randomString(6),
                    phone: dbresult.phone
                }
            };
            LogUserCheck.findOneAndUpdate(data.log, { $set: { key: data.sms.key } }, 'phone key', (err: any, dblogresult: any) => {
                if (dblogresult) {
                    console.log(dblogresult);
                    res.json(resJsonData(1, { token: req.userToken }, "Resend Key Success!"));
                    addSMS(data.sms);
                }
            })
        } else {
            res.json(resJsonData(-1, { token: "" }, "Resend Key fail!"));
        }
    })
}

function uploadImages(req: any, res: any) {
    console.log(req.files);
    if (req.files.avatar) {
        User.update({ _id: req.uid }, { $set: { "profile.avatar": req.files.avatar[0].filename } })
            .then((db: any) => {
                res.json(resJsonData(1, { token: req.userToken }, 'Up Avatar Success!'));
            }).catch(err => {
                console.log(err);
                res.json(resJsonData(-1, { token: req.userToken }, 'Up Avatar Fails!'));
            })
    } else if (req.files.cover) {
        User.update({ _id: req.uid }, { $set: { "profile.cover": req.files.cover[0].filename } })
            .then((db: any) => {
                res.json(resJsonData(1, { token: req.userToken }, 'Up Cover Success!'));
            }).catch(err => {
                console.log(err);
                res.json(resJsonData(-1, { token: req.userToken }, 'Up Cover Fails!'));
            })
    }
}

function editProfile(req: any, res: any) {
    let obj: Object = {};
    req.body.name ? obj["profile.name"] = req.body.name : '';
    req.body.birthdate ? obj["profile.birthdate"] = req.body.birthdate : '';
    req.body.status ? obj["profile.status"] = req.body.status : '';
    req.body.address ? obj["address"] = req.body.address : '';
    req.body.location ? obj["profile.address"] = req.body.location : '';
    console.log(obj);
    User.update({ _id: req.uid }, { $set: obj }).then((dbresult: any) => {
        if (dbresult) {
            res.json(resJsonData(1, { token: req.userToken }, 'Edit Success!'));
        } else {
            res.json(resJsonData(-1, { token: req.userToken }, 'Edit Profile Fails !'));
        }
    }).catch((err: any) => {
        console.log(`Error Upadate profile \n ${err}`);
    })
}

function listProfile(req: any, res: any) {
    User.findById(req.uid).then((db: any) => {
        let obj: Object = {
            name: db.name || "",
            birthdate: db.profile.name || "",
            phone: db.phone,
            avatar: db.profile.avatar ? urlUser + db.profile.avatar : '',
            cover: db.profile.cover ? urlUser + db.profile.cover : '',
            status: db.profile.status || "",
            address: db.address || "",
            location: db.profile.address || ""
        };
        res.json(resJsonData(1, { token: req.userToken }, 'Success !', { data: obj }));
    }).catch((error: any) => {
        res.json(resJsonData(-1, { token: req.userToken }, 'Profile User Fail!'));
    })
}
export {
createUserPut,
pushNotification,
createUserPost,
userLoginPost,
userLogoutPost,
addResetPassword,
checkKeyResetPassword,
resetSmsKey,
uploadImages,
editProfile,
listProfile
};