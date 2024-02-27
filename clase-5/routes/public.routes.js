const express = require('express');
const { getIndex } = require('../controller/public.controller');
const router = express.Router();

router.get('/', getIndex);

module.exports = {
    routes: router,
};
