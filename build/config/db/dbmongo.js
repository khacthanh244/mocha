"use strict";
const mongoose_1 = require('mongoose');
function dbApp(config) {
    let db = mongoose_1.createConnection(config.mongo.app.uri, config.mongo.options);
    db.on('error', (err) => {
        console.log(`MongoDB connection error: ${err}`);
        process.exit(-1);
    });
    db.Promise = global.Promise;
    return db;
}
exports.dbApp = dbApp;
function dbLog(config) {
    let db = mongoose_1.createConnection(config.mongo.log.uri, config.mongo.options);
    db.on('error', (err) => {
        console.log('MongoDB connect error:\n');
        console.log(err);
        process.exit(-1);
    });
    db.Promise = global.Promise;
    return db;
}
exports.dbLog = dbLog;
