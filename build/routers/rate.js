"use strict";
const express_1 = require('express');
const rateController_1 = require('../controller/rateController');
const verifyToken_1 = require('../libs/verifyToken');
const router = express_1.Router();
router.route('/')
    .put(verifyToken_1.verifyToken, rateController_1.addRate)
    .all((req, res) => {
    res.sendStatus(404);
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router;
