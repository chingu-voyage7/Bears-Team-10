const db = require("../config/db");
const uuid_v4 = require('uuid/v4')

async function createProject(ctx) {
  const projectId = uuid_v4();
  const currentDate = new Date()
  const createdProject = await db.createProject(
    projectId,
    ctx.state.user.id,
    ctx.request.body.projectTitle,
    ctx.request.body.projectDescription,
    currentDate
  );

  console.log(createdProject);
  ctx.send(200, {
    message: "Post Creation Successful!",
    user: createdProject
  });
}

async function fetchProjects(ctx) {
  const allProjects = await db.fetchProjects();
  ctx.send(200, {
    message: "All Projects",
    allProjects
  });
}

module.exports = {
  createProject,
  fetchProjects
};
