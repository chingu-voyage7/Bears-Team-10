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
  console.log(user);
  const currentUser = await db.getUserProfile(user);
  console.log(currentUser);
  ctx.send(200, {
    currentUser
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
  console.log(updatedUser);
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
  updateUserProfile,
  deleteUserById
};
