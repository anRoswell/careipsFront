const express = require('express')
const router = express.Router()

const { SliderController } = require('../../controllers/api/slider.controller')
const Ctrl = new SliderController()
const schema = require('../../database/schemas/seguimiento.json')
const Schema = require('../../middlewares/schema')(schema)
const JWT = require('../../middlewares/jwt')
//const route = 'tipoSeguimiento'

router.get(`/slider`, Ctrl.all)

module.exports = router
