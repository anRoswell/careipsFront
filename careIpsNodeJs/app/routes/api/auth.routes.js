const express = require('express')
const router = express.Router()

const { AuthController } = require('../../controllers/api/auth.controller')
const Ctrl = new AuthController()
const schema = require('../../database/schemas/auth.json')
const Schema = require('../../middlewares/schema')(schema)
const { validateUserRecovery } = require('./../../validators/userRecoveryPass.validator')

router
	.post(`/auth/login`, [Schema.cleaner, Schema.validate], Ctrl.auth)
	.post('/rvyauth/recoverypass', Ctrl.recoverypassmb)
	.put('/passmbusers/:id', validateUserRecovery, Ctrl.updatePassUsermb)

module.exports = router
