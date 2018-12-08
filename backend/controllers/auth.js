const db = require('../config/db')
const uuid_v4 = require('uuid/v4');
const bcrypt = require('bcrypt')
const passport = require('koa-passport')

async function register(ctx) {
  const { username, password } = ctx.request.body

  if (!username || !password) {
    return ctx.badRequest({ error: 'invalid username/password' })
  }

  const existingUser = await db.findUserByusername(username);
  if (existingUser) {
    return ctx.badRequest({ error: 'username already exists' })
  }
  const salt = bcrypt.genSaltSync();
  const hashedPassword = bcrypt.hashSync(password, salt)
  const id = uuid_v4()
  const registerResult = await db.addUser(id, username, hashedPassword)
  ctx.login({ id, username, hashedPassword })
  return ctx.ok(registerResult)
}

async function login(ctx) {
  console.log(ctx.isAuthenticated())
  passport.authenticate('local')
  console.log(ctx.isAuthenticated())
}

async function logout(ctx) {
  if (ctx.isAuthenticated()) {
    ctx.logout()
  }
  console.log(ctx.isAuthenticated())
}

async function status(ctx) {
  console.log(ctx.isAuthenticated())
}

module.exports = {
  register,
  login,
  logout,
  status
}
