const Router = require('koa-router')
const router = new Router()
const Ctrl = require('../controllers/auth')

router.post('/register', Ctrl.register)
router.post('/login', Ctrl.login)
router.get('/logout', Ctrl.logout)
router.get('/status', Ctrl.status)

module.exports = router.routes()
