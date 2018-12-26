module.exports = router => {
  router.prefix('/api')
  router.use('/users', require('./users'))
  router.use('/auth', require('./auth'))
  router.use('/projects', require('./projects'))
}