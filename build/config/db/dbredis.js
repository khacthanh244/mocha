"use strict";
const redis_1 = require('redis');
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (config) => {
    let client = redis_1.createClient(config.redis.port, config.redis.host);
    client.on("error", (err) => {
        console.log(`Redis Error ${err}`);
    });
    return client;
};
