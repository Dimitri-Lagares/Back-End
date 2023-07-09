const express = require('express')
const users = require('../services/user.service')
const router = express.Router()

router.get('/all', users.getAllUsers)
router.get('/byid/:id', users.getUsersById)
router.post('/create', users.createUser)

module.exports = router