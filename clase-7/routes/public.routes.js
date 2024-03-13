const express = require('express');
const { getIndex, getUserInfo, getTest, postProposal, getPokemon } = require('../controller/public.controller');
const router = express.Router();

router.get('/', getIndex);
router.get('/user', getUserInfo);
router.get('/test', getTest);
router.get('/pokemon', getPokemon);
router.post('/proposal', postProposal);

module.exports = {
    routes: router,
};
