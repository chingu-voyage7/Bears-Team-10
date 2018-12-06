const bcrypt = require('bcrypt')
const LocalStrategy = require('passport-local')

module.exports = (passport, db) => {
  passport.use(new LocalStrategy((email, password, cb) => {
    db.query('SELECT id, email, password FROM users WHERE email=$1', [email], (err, result) => {
      if (err) {
        console.log(err)
        return cb(err)
      }

      if (result.rows.length > 0) {
        const first = result.rows[0]
        bcrypt.compare(password, first.password, (err, res) => {
          if (res) {
            cb(null, { id: first.id, email: first.email })
          } else {
            cb(null, false)
          }
        })
      } else {
        cb(null, false)
      }
    })
  }))

  passport.serializeUser((user, done) => {
    done(null, user.id);
  })

  passport.deserializeUser((id, cb) => {
    db.query('SELECT id, email FROM users WHERE id=$1', [parseInt(id, 10)], (err, results) => {
      if (err) {
        console.log(err)
        return cb(err)
      }
      cb(null, results.rows[0])
    })
  })

}