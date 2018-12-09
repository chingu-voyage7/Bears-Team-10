const Pool = require('pg').Pool

const pool = new Pool({ connectionString: process.env.CONNECTION_STRING })
pool.on('error', err => console.log(err))

const queries = {
  // add a user to the database. returns total number of rows inserted. 1 = success, 0 = failure
  addUser: async (id, username, hashedPassword) => {
    const result = await pool.query('INSERT INTO USERS VALUES ($1, $2, $3) RETURNING *', [id, username, hashedPassword])
    return result.rows[0]
  },
  // check existing username. returns total number of rows returned. 1 = success, 0 = failure
  findUserByusername: async (username) => {
    const result = await pool.query('SELECT id FROM USERS WHERE username=$1', [username])
    return result.rows[0]
  }
}

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback)
  },
  ...queries
}
