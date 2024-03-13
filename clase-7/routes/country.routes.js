const express = require('express');
const { getCountryList } = require('../controller/country.controller');
const router = express.Router();


router.get('/country/countrylist', getCountryList);

module.exports = {
    routes: router,
};
