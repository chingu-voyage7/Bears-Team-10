
function signup(ctx) {
  // let user = ctx.request.query.user
  // ctx.ok({ user })
  const { email, password } = ctx.request.body.email
  ctx.ok('OK')
}

module.exports = {
  signup
}
