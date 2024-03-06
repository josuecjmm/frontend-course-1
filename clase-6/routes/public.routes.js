const express = require('express');
const { getIndex, getUserInfo, getTest, postProposal } = require('../controller/public.controller');
const router = express.Router();

router.get('/', getIndex);
router.get('/user', getUserInfo);
router.get('/test', getTest);
router.post('/proposal', postProposal);

module.exports = {
    routes: router,
};
