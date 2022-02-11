const express = require('express')
const router = express.Router()

const { PatientsController } = require('../../controllers/api/patients.controller')
const Ctrl = new PatientsController()
const route = 'patients'

router.get(`/${route}`, Ctrl.all).post(`/${route}`, Ctrl.create)

module.exports = router
