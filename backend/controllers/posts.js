const db = require("../config/db");
const uuid_v4 = require('uuid/v4')

async function newPost(ctx) {
  const postId = uuid_v4();
  const currentDate = new Date()
  const createdPost = await db.newPost(
    postId,
    ctx.request.body.projectId,
    ctx.state.user.id,
    ctx.request.body.postContent,
    currentDate
  );

  console.log(createdPost);
  ctx.send(200, {
    message: "Post Creation Successful!",
    user: createdPost
  });
}

async function fetchPosts(ctx) {
  projectId = ctx.request.body.projectId,
  console.log(projectId);
  const allPosts = await db.fetchPosts(projectId);
  ctx.send(200, {
    message: "All Posts for current Project",
    allPosts
  });
}

module.exports = {
  newPost,
  fetchPosts
};
