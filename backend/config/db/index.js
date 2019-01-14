const Pool = require("pg").Pool;

const pool = new Pool({ connectionString: process.env.CONNECTION_STRING });
pool.on("error", err => console.log(err));

const queries = {
  // add a user to the database. returns total number of rows inserted. 1 = success, 0 = failure
  addUser: async (id, username, hashedPassword) => {
    const result = await pool.query(
      "INSERT INTO USERS VALUES ($1, $2, $3) RETURNING *",
      [id, username, hashedPassword]
    );
    return result.rows[0];
  },
  // check existing username. returns total number of rows returned. 1 = success, 0 = failure
  findUserByusername: async username => {
    const result = await pool.query("SELECT id FROM USERS WHERE username=$1", [
      username
    ]);
    return result.rows[0];
  },
  getUserProfile: async userId => {
    const result = await pool.query("SELECT * FROM USERS WHERE id=$1;", [
      userId
    ]);
    return result.rows[0];
  },
  updateProfileComponent: async (key, value, id) => {
    const result = await pool.query(`UPDATE users SET ${key}=$1 where id=$2 RETURNING *`,[value, id])
    return result.rows[0];
  },
  updateUserProfile: async (
    profile_picture,
    display_name,
    bio,
    interests,
    github,
    id
  ) => {
    const result = await pool.query(
      `UPDATE users SET profile_picture=$1, display_name=$2,
      bio=$3, interests=$4, github=$5 WHERE id=$6 RETURNING *;`,
      [profile_picture, display_name, bio, interests, github, id]
    );
    return result.rows[0];
  },
  deleteUserById: async userId => {
    console.log(`Ill delete this user: ${userId}`);
    // const result = await pool.query(
    //   "DELETE users WHERE userId=$1;"
    // )
  },
  createProject: async (
    project_id,
    project_owner_user_id,
    project_title,
    project_description,
    creation_timestamp
  ) => {
    const result = await pool.query(
      "INSERT INTO PROJECTS VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [project_id, project_owner_user_id, project_title, project_description, creation_timestamp]
    );
    console.log(result);
    return result.rows[0];
  },
  fetchProjects: async () => {
    const result = await pool.query("SELECT * FROM PROJECTS");
    return result.rows;
  },

  newPost: async (
    post_id,
    project_id,
    post_creator_user_id,
    post_content,
    creation_timestamp
  ) => {
    const result = await pool.query(
      "INSERT INTO POSTS VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [post_id, project_id, post_creator_user_id, post_content, creation_timestamp]
    );
    console.log(result);
    return result.rows[0];
  },
  
  fetchPosts: async projectId => {
    const result = await pool.query("SELECT * FROM POSTS");
    return result.rows;
  },

  addCollaborator: async (project_id, collaboratorUsername) => {
    try {
      const result = await pool.query(`
    INSERT INTO PROJECT_COLLABORATOR_XREF SELECT $1, id FROM USERS WHERE USERNAME=$2 RETURNING *
    `,
    [project_id, collaboratorUsername]);
    return result.rows.length;
  }
    catch (error) {
      return error.code;
    }
  }

};

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
  ...queries
};
