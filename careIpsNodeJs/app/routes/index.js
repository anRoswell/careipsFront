const auth = require('./api/auth.routes')
const profiles = require('./api/profile.routes')
const users = require('./api/user.routes')
const menus = require('./api/menu.routes')

const patients = require('./web/patients.routes')

module.exports = [auth, profiles, users, menus, patients]
