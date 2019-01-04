const db = require('../config/db')
const uuid_v4 = require('uuid/v4')
const bcrypt = require('bcrypt')
const passport = require('koa-passport')

async function register(ctx) {
  const { username, password } = ctx.request.body;

  const existingUser = await db.findUserByusername(username)
  if (existingUser) {
    return ctx.badRequest({ error: 'username already exists' })
  }

  const salt = bcrypt.genSaltSync()
  const hashedPassword = bcrypt.hashSync(password, salt)
  const id = uuid_v4()

  const registeredUser = await db.addUser(id, username, hashedPassword);
  ctx.login(registeredUser);
  ctx.send(200, "Registered Successfully");
}

async function login(ctx) {
  return passport.authenticate("local", (err, user, info, status) => {
    if (user) {
      ctx.login(user);
      ctx.send(200, "Login Successful");
    } else {
      ctx.send(400, "Login Failed");
    }
  })(ctx);
}

async function logout(ctx) {
  if (ctx.isAuthenticated()) {
    ctx.logout();
    return ctx.send(200, "Logged Out");
  }
  return ctx.send(200, "Already logged out");
}

async function status(ctx) {
  ctx.send(200, { isLoggedIn: ctx.isAuthenticated(), user: ctx.state.user })
}

async function requireAuth(ctx, next) {
  if (ctx.isAuthenticated()) {
    await next();
  } else {
    return ctx.send(401, { error: "Login required" });
  }
}

module.exports = {
  register,
  login,
  logout,
  status,
  requireAuth
};
