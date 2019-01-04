const db = require("../config/db");

async function hello(ctx) {
  let user = ctx.state.user;
  ctx.body = "Hello";
  ctx.send(200, {
    user
  });
}

async function getUser(ctx) {
  let user = ctx.state.user.id;
  const currentUser = await db.getUserProfile(user);
  ctx.send(200, {
    currentUser
  });
}

async function updateProfileComponent(ctx){
  const user = ctx.state.user.id;
  const { key, value } = {...ctx.request.body}
  const updatedUser = await db.updateProfileComponent(key, value, user);
  ctx.send(201, {
    message: "Update Succesful!",
    user: updatedUser
  });
}

async function updateUserProfile(ctx) {
  const updatedUser = await db.updateUserProfile(
    ctx.request.body.profile_picture,
    ctx.request.body.display_name,
    ctx.request.body.bio,
    ctx.request.body.interests,
    ctx.request.body.github,
    ctx.state.user.id
  );
  ctx.send(201, {
    message: "Update Succesful!",
    user: updatedUser
  });
}

async function deleteUserById(ctx) {
  const deleteUser = await db.deleteUserById(ctx.state.user.id);
}

module.exports = {
  hello,
  getUser,
  updateProfileComponent,
  updateUserProfile,
  deleteUserById
};
