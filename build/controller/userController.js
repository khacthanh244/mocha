"use strict";
const libs_1 = require('../libs');
const userModel_1 = require('../models/userModel');
const smsModel_1 = require('../models/smsModel');
const logUserCheckModel_1 = require('../models/logUserCheckModel');
const logUserLoginModel_1 = require('../models/logUserLoginModel');
const verifyToken_1 = require('../libs/verifyToken');
const redis_1 = require('../libs/redis');
const notification_1 = require('../libs/notification');
function createUserPost(req, res) {
    let data = {
        user: {
            phone: req.body.phone,
            password: req.body.pass,
            status: 0
        },
        check: {
            phone: req.body.phone,
            password: req.body.pass,
            key: libs_1.randomString(6),
            type: 0,
            status: 0
        }
    };
    console.log('User Register\n');
    checkUser(req, res, data);
}
exports.createUserPost = createUserPost;
function createUserPut(req, res) {
    let data = {
        phone: req.body.phone,
        key: req.body.key,
        type: 0,
        status: 0
    };
    console.log('Check SMS Key \n');
    console.log(data);
    checkUserLog(req, res, data);
}
exports.createUserPut = createUserPut;
function checkUserLog(req, res, data, type) {
    logUserCheckModel_1.default.findOneAndUpdate(data, { $set: { status: 1 } }, 'phone key password', (err, dbresult) => {
        if (dbresult) {
            let obj = {
                uid: req.uid,
                dtoken: req.body.dtk,
                ip: req.body.ip,
                status: 1
            };
            if (type === 2) {
                updateUser(req.uid, { password: dbresult.password });
            }
            else {
                updateUser(req.uid, { status: 1 });
            }
            addUserLoginLog(obj);
            res.json(libs_1.resJsonData(1, { token: req.userToken }, 'Key Success', ''));
            redis_1.setValueRedis(`uid_${req.uid}`, req.userToken);
        }
        else {
            res.json(libs_1.resJsonData(-1, { token: req.userToken }, 'Phone or Key False!', ''));
        }
    });
}
function updateUser(id, data) {
    userModel_1.default.update({ _id: id }, { $set: data }, { multi: true }, (err, dbresult) => {
        if (dbresult) {
            console.log('update User Success\n');
        }
    });
}
function addUserLoginLog(data) {
    logUserLoginModel_1.default.create(data, (err, dbresult) => {
        if (dbresult) {
            console.log(`add Log User Login \n ${dbresult}`);
        }
        else {
            console.log('not add Log User Login\n');
        }
    });
}
function checkUser(req, res, data, type) {
    let p = req.body.phone || req.params.phone;
    userModel_1.default.findOne({ phone: p }, 'phone password status', (err, dbresult) => {
        if (dbresult) {
            let status = dbresult.status | 0;
            let token = {
                uid: dbresult._id,
                token: req.body.dtk
            };
            if (status === 0) {
                res.json(libs_1.resJsonData(-1, { token: verifyToken_1.getToken(token) }, 'Please Check Key SMS!', ''));
            }
            else if (status === 1) {
                if (type === 1) {
                    userLogin(req, res, dbresult);
                }
                else if (type === 2) {
                    console.log('user Reset Password\n');
                    addUserCheck(data);
                    addSMS(data);
                    res.json(libs_1.resJsonData(1, { token: verifyToken_1.getToken(token) }, 'Reset Password Success! Please Add Key SMS!', ''));
                }
                else {
                    res.json(libs_1.resJsonData(-1, { token: "" }, 'Please Login!', ''));
                }
            }
            else {
                res.json(libs_1.resJsonData(-1, { token: "" }, 'Please Login!', ''));
            }
        }
        else {
            console.log('not User');
            if (type === 1 || type === 2) {
                res.json(libs_1.resJsonData(-1, { token: "" }, 'Please Register!', ''));
            }
            else {
                addUsers(req, res, data.user);
                addUserCheck(data.check);
                addSMS(data.check);
            }
        }
    });
}
function addUsers(req, res, data) {
    userModel_1.default.create(data, (err, dbresult) => {
        if (dbresult) {
            let token = {
                uid: dbresult._id,
                token: req.body.dtk
            };
            res.json(libs_1.resJsonData(1, { token: verifyToken_1.getToken(token) }, 'Register Success! Please Add Key SMS!', ''));
        }
        else {
            console.log('create fails \n');
        }
    });
}
function addSMS(data) {
    let datasms = {
        mess: `Ma so kich hoat ung dung OC Vang cua ban la: ${data.key}`,
        type: 0,
        send: 1,
        time: Math.floor(Date.now() / 1000),
        phone: data.phone,
        status: 0
    };
    smsModel_1.default.build().add(datasms).then((mess) => {
        if (mess.get('id')) {
            console.log('saveSms ' + mess.get('id'));
        }
        else {
            console.log('save Sms Fails ');
        }
    });
}
function addUserCheck(data) {
    logUserCheckModel_1.default.create(data, (err, dbresult) => {
        if (dbresult) {
            console.log(dbresult);
        }
    });
}
function userLoginPost(req, res) {
    checkUser(req, res, '', 1);
}
exports.userLoginPost = userLoginPost;
function userLogin(req, res, data) {
    console.log(data);
    if (req.body.pass === data.password) {
        let obj = {
            uid: data._id,
            dtoken: req.body.dtk,
            ip: req.body.ip,
            status: 1
        };
        checkUserLoginLog(req, res, obj);
    }
    else {
        res.json(libs_1.resJsonData(-1, { token: "" }, 'Phone or Password Fail!', ''));
    }
}
function checkUserLoginLog(req, res, data) {
    let token = verifyToken_1.getToken({ uid: data.uid, token: req.body.dtk });
    logUserLoginModel_1.default.findOneAndUpdate({ uid: data.uid, status: 1 }, { $set: { status: -1 } }, 'uid dtoken status', (err, dbresult) => {
        if (dbresult) {
            console.log('Check Login Other Device!\n');
            console.log(`uid:${dbresult.uid} \n 
            db device: ${dbresult.dtoken} / user device: ${req.body.dtk}\n`);
            addUserLoginLog(data);
            if (dbresult.dtoken !== req.body.dtk) {
                redis_1.setValueRedis(`uid_${data.uid}`, token);
                pushUserOtherDevice(dbresult.dtoken);
            }
            res.json(libs_1.resJsonData(1, { token: token }, 'Login Success Other Device!', ''));
        }
        else {
            res.json(libs_1.resJsonData(1, { token: token }, 'Login Success!', ''));
            addUserLoginLog(data);
            redis_1.setValueRedis(`uid_${data.uid}`, token);
        }
    });
}
function pushUserOtherDevice(token) {
    let data = {
        'respondCode': -2,
        'messager': 'User login other device!'
    };
    notification_1.pushAndroid(data, [token]);
}
function userLogoutPost(req, res) {
    logUserLoginModel_1.default.findOneAndUpdate({ uid: req.uid, status: 1 }, { $set: { status: -1 } }, 'uid', (err, dbresult) => {
        if (dbresult) {
            console.log('Log Out \n');
            redis_1.delKeyRedis(`uid_${req.uid}`);
            res.json(libs_1.resJsonData(1, { token: "" }, "Logout Success!", ''));
        }
        else {
            res.json(libs_1.resJsonData(-1, { token: "" }, "Logout fail!", ''));
        }
    });
}
exports.userLogoutPost = userLogoutPost;
function pushNotification(req, res) {
    let key = req.params.key;
    let data = req.params.data || 'Bạn Quên Gởi Data Rồi';
    notification_1.pushAndroid(data, [key]);
    res.json(libs_1.resJsonData(1, { token: req.userToken }, "pushNotification Success!", ''));
}
exports.pushNotification = pushNotification;
function addResetPassword(req, res) {
    let data = {
        phone: req.body.phone,
        password: req.body.pass,
        key: libs_1.randomString(6),
        type: 1,
        status: 0
    };
    checkUser(req, res, data, 2);
}
exports.addResetPassword = addResetPassword;
function checkKeyResetPassword(req, res) {
    let data = {
        phone: req.body.phone,
        key: req.body.key,
        type: 1,
        status: 0
    };
    checkUserLog(req, res, data, 2);
}
exports.checkKeyResetPassword = checkKeyResetPassword;
function resetSmsKey(req, res) {
    userModel_1.default.findOne({ _id: req.uid }, 'phone', (err, dbresult) => {
        if (dbresult) {
            let data = {
                log: {
                    phone: dbresult.phone,
                    status: 0
                }, sms: {
                    key: libs_1.randomString(6),
                    phone: dbresult.phone
                }
            };
            logUserCheckModel_1.default.findOneAndUpdate(data.log, { $set: { key: data.sms.key } }, 'phone key', (err, dblogresult) => {
                if (dblogresult) {
                    console.log(dblogresult);
                    res.json(libs_1.resJsonData(1, { token: req.userToken }, "Resend Key Success!", ''));
                    addSMS(data.sms);
                }
            });
        }
        else {
            res.json(libs_1.resJsonData(-1, { token: "" }, "Resend Key fail!", ''));
        }
    });
}
exports.resetSmsKey = resetSmsKey;
function uploadImages(req, res) {
}
exports.uploadImages = uploadImages;
function editProfile(req, res) {
}
exports.editProfile = editProfile;
function listProfile(req, res) {
    userModel_1.default.findById(req.uid).then((db) => {
        return db;
    }).then((db2) => {
        res.json(db2);
        console.log(db2);
    });
}
exports.listProfile = listProfile;
function resProfileUser() {
}
