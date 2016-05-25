import {createConnection,Promise} from 'mongoose';

function dbApp(config: any) {
    let db: any = createConnection(config.mongo.app.uri, config.mongo.options);
    db.on('error', (err:any) => {
        console.log(`MongoDB connection error: ${err}`);
        process.exit(-1);
    });
    db.Promise = global.Promise;
    return db;
}
function dbLog(config: any) {
    let db: any = createConnection(config.mongo.log.uri, config.mongo.options);
    db.on('error', (err: any) => {
        console.log('MongoDB connect error:\n');
        console.log(err);
        process.exit(-1);
    });
    db.Promise = global.Promise;
    return db;
}

export {dbApp, dbLog};