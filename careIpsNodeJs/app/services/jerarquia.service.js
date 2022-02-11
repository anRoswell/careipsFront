/**
 * @name JerarquiaService
 * @type Class
 * @description Servicio encargado de implementar el login de usuarios en el sistema
 * @author enosReyes
 */

 const { Service } = require('../base/service')
 const { JerarquiaModel } = require('../models/jerarquia.model')
 const Log4js = require('./../base/log4js')()
 
 let _model = null
 
 class JerarquiaService extends Service {
    constructor() {
        super(new JerarquiaModel())
        _model = new JerarquiaModel()
    }

    async spCall(sp, params){
        try {
            return await _model.spCall(sp, params)            
        } catch (error) {
            Log4js.error(`[action: Jerarquia.service spCall][msg: ${error.message}][file:${__filename}]`)
            throw error
        }
    }
     
 }
 
 module.exports.JerarquiaService = JerarquiaService
 