const Router = require('koa-router')
const router = new Router()
const Ctrl = require('../controllers/auth')

router.post('/signup', Ctrl.signup)

module.exports = router.routes()
