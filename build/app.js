"use strict";
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const express = require('express');
const http_1 = require('http');
const environment_1 = require('./config/environment');
const express_1 = require('./config/express');
const index_1 = require('./routers/index');
const app = express();
const server = http_1.createServer(app);
express_1.default(app);
index_1.default(app);
console.log(environment_1.default);
server.listen(environment_1.default.port, environment_1.default.ip, () => {
    console.log(`Sever listenting on ${environment_1.default.ip}:${environment_1.default.port} in ${app.get('env')}`);
});
