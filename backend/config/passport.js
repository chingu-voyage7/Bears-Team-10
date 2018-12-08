const passport = require('koa-passport')
const db = require('./db')
const bcrypt = require('bcrypt')
const LocalStrategy = require('passport-local')

passport.serializeUser((user, done) => { done(null, user.id); })

passport.deserializeUser((id, done) => {
  return db.query('SELECT id, username FROM users WHERE id=$1', [id], (err, results) => {
    done(err, results.rows[0])
  })
})

passport.use(new LocalStrategy((username, password, done) => {
  console.log('username', username)
  db.query('SELECT id, username, password FROM users WHERE username=$1', [username], (err, result) => {
    console.log(err, result)
    if (err) { return done(err) }
    if (result.rows.length > 0) {
      const first = result.rows[0]
      bcrypt.compare(password, first.password, (err, res) => {
        if (res) {
          return done(null, first)
        } else {
          return done(null, false, { message: 'Incorrect password' })
        }
      })
    } else {
      done(null, false, { message: 'User not found' })
    }
  })
}))

