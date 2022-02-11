const express = require('express')
const router = express.Router()

const { ReligionController } = require('../../controllers/api/religion.controller')
const Ctrl = new ReligionController()
const schema = require('../../database/schemas/religion.json')
const Schema = require('../../middlewares/schema')(schema)
const JWT = require('../../middlewares/jwt')
//const route = 'religion'

router
	.get(`/religion`, [JWT.isAuth], Ctrl.all)
	.get(`/religion/:list`, [JWT.isAuth], Ctrl.list)
	.get(`/idreligion/:id`, [JWT.isAuth], Ctrl.one)
	.post(`/religion`, [JWT.isAuth, Schema.cleaner, Schema.validate], Ctrl.create)
	.put(`/religion/:id`, [JWT.isAuth], Ctrl.update)
//.delete(`/religion/:id`, [JWT.isAuth], Ctrl.delete)

module.exports = router
