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
  const allPosts = await db.fetchPosts();
  ctx.send(200, {
    message: "All Posts for current Project",
    allPosts
  });
}

async function fetchProjectCollaborators(ctx) {
  const collaborators = await db.fetchProjectCollaborators();
  ctx.send(200, {
    message: "All collaborators for current Project",
    collaborators
  });
}


module.exports = {
  newPost,
  fetchPosts,
  fetchProjectCollaborators
};
