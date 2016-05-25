process.env.NODE_ENV = process.env.NODE_ENV || 'development';

import * as express from 'express';
import * as mongoose from 'mongoose';
import {createServer} from 'http';
import config from './config/environment';
import exconfig from './config/express';
import routerconfig from './routers/index';

const app: express.Express = express();

const  server = createServer(app);
// include express config 
exconfig(app);
// include routers config  
routerconfig(app);
// include Connect Database
console.log(config);

server.listen(config.port,config.ip,()=>{
    console.log(`Sever listenting on ${config.ip}:${config.port} in ${app.get('env')}`);
})