"use strict";
const express_1 = require('express');
const reTypeController_1 = require('../controller/reTypeController');
const router = express_1.Router();
router.route('/')
    .get(reTypeController_1.add)
    .all((req, res, next) => {
    res.sendStatus(404);
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router;
