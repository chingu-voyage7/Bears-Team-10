const Koa = require('koa');
const Router = require('koa-router');
const Logger = require('koa-logger');
const Cors = require('@koa/cors');
const BodyParser = require('koa-bodyparser');
const Helmet = require('koa-helmet');
const respond = require('koa-respond');
const session = require('koa-session');
const serve = require('koa-static');
const path = require('path');
const db = require('./config/db');
const passport = require('koa-passport');

const app = new Koa();
const router = new Router();

app.proxy = true;
app.use(Helmet());

if (process.env.NODE_ENV === 'development') {
  app.use(Logger());
}

app.use(Cors());

// sessions
app.keys = [process.env.SECRET_SESSION_KEY];
app.use(session({}, app));

app.use(BodyParser());
app.use(respond());

//AUTH setup
require('./config/passport');
app.use(passport.initialize());
app.use(passport.session());

// API routes
require('./routes')(router);
app.use(router.routes());

if (process.env.NODE_ENV === 'production') {
  app.use(serve(path.resolve(__dirname, '..', 'frontend', 'build')));
}

app.use(router.allowedMethods());

module.exports = app;
