const express = require('express');
const { getCreatePet, postCreatePet, getPetList } = require('../controller/pet.controller');
const router = express.Router();

router.get('/pet', getCreatePet);
router.get('/pet/list', getPetList);
router.get('/pet/:petId', getCreatePet);
router.post('/pet', postCreatePet);

module.exports = {
    routes: router,
};
