const express = require('express')
const pets = require('../services/pets.service.js')
const router = express.Router()

router.get('/all', pets.getAllPets)
router.get('/byid/:id', pets.getPetsById)
router.post('/create', pets.createPet)
router.put('/update', pets.updatePet)
router.delete('/delete/:id', pets.deletePet)
module.exports = router