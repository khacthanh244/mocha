"use strict";
const express_1 = require('express');
const attributeController_1 = require('../controller/attributeController');
const router = express_1.Router();
router.route('/')
    .get(attributeController_1.addAtribute)
    .all((req, res, next) => {
    res.sendStatus(404);
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router;
