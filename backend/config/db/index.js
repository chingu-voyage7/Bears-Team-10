const Pool = require('pg').Pool

const pool = new Pool({ connectionString: process.env.CONNECTION_STRING })
pool.on('error', err => console.log(err))

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback)
  }
}
