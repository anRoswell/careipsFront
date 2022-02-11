/**
 * @name JerarquiaModel
 * @type Class
 * @description Modelo encargado de las marcas
 * @author enosReyes
 */

 const { Model } = require('../base/model')
 const Log4js = require('../base/log4js')()
 _model = null

 class JerarquiaModel extends Model {
     constructor() {
         super('C_jerarquias')
         _model = new Model()
     }

    async spCall(sp, params){
        try {
            return await _model.query(sp, params)
        } catch (error) {
            Log4js.error(`[action: Jerarquia.model spCall][msg: ${error.message}][file:${__filename}]`)
            throw error
        }
    }
 }
 
 module.exports.JerarquiaModel = JerarquiaModel
 