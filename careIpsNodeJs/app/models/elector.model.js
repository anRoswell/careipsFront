/**
 * @name ElectorModel
 * @type Class
 * @description Modelo encargado de los electores
 * @author enosReyes
 */

 const { Model } = require('../base/model')
 const Log4js = require('./../base/log4js')()
 _model = null

 class ElectorModel extends Model {
     constructor() {
         super('C_electores')
         _model = new Model()
     }

    async spCall(sp, params){
        try {
            return await _model.query(sp, params)
        } catch (error) {
            Log4js.error(`[action: elector.model spCall][msg: ${error.message}][file:${__filename}]`)
            throw error
        }
    }
 }
 
 module.exports.ElectorModel = ElectorModel
 