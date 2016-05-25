"use strict";
const express_1 = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (app) => {
    let env = app.get('env');
    app.set('x-powered-by', false);
    app.use(express_1.static(__dirname + './public/uploads/'));
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    if (env == 'development') {
        app.use(morgan('dev'));
    }
};
