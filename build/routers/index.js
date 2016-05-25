"use strict";
const userRouter_1 = require('./userRouter');
const postRouter_1 = require('./postRouter');
const addressRouter_1 = require('./addressRouter');
const attributeRouter_1 = require('./attributeRouter');
const reTypeRouter_1 = require('./reTypeRouter');
const postAnchorRouter_1 = require('./postAnchorRouter');
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (app) => {
    app.use('/api/user', userRouter_1.default);
    app.use('/api/post', postRouter_1.default);
    app.use('/api/address', addressRouter_1.default);
    app.use('/api/attribute', attributeRouter_1.default);
    app.use('/api/retype', reTypeRouter_1.default);
    app.use('/api/postanchor', postAnchorRouter_1.default);
    app.route('/*')
        .all((req, res) => {
        res.sendStatus(404);
    });
};
