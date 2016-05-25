"use strict";
const express_1 = require('express');
const addressController_1 = require('../controller/addressController');
const router = express_1.Router();
router.route('/')
    .get(addressController_1.addCity)
    .post(addressController_1.findStreetAndUpdate)
    .all((req, res, next) => {
    res.sendStatus(404);
});
router.route('/getstreetall')
    .get(addressController_1.findStreetAll)
    .all((req, res, next) => {
    res.sendStatus(404);
});
router.route('/findstreetbyid')
    .get(addressController_1.findStreetById)
    .all((req, res, next) => {
    res.sendStatus(404);
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router;
