const Router = require('koa-router')
const router = new Router()
const Ctrl = require('../controllers/users')
const requireAuth = require('../controllers/auth').requireAuth

router.get('/', requireAuth, Ctrl.hello)

module.exports = router.routes()
