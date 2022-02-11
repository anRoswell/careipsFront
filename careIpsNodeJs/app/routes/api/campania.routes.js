const express = require('express')
const router = express.Router()

const { CampaniaController } = require('../../controllers/api/campania.controller')
const Ctrl = new CampaniaController()
const schema = require('../../database/schemas/campania.json')
const Schema = require('../../middlewares/schema')(schema)
const JWT = require('../../middlewares/jwt')
//const route = 'campaia'

router
	.get(`/campania`, [JWT.isAuth], Ctrl.all)
	.get(`/spcampania`, [JWT.isAuth], Ctrl.spCampaniaSelect) //shit + alt + flecha abajo
	.get(`/listcampania/:list`, [JWT.isAuth], Ctrl.list)
	.get(`/idcampania/:id`, [JWT.isAuth], Ctrl.one) //shit + alt + flecha abajo
	.post(`/campania`, [JWT.isAuth, Schema.cleaner, Schema.validate], Ctrl.create)
	.put(`/campania/:id`, [JWT.isAuth], Ctrl.update)
//.delete(`/campania/:id`, [JWT.isAuth], Ctrl.delete)

module.exports = router
