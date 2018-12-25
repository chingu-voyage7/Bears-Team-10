const Router = require("koa-router");
const router = new Router();
const Ctrl = require("../controllers/projects");
const requireAuth = require("../controllers/auth").requireAuth;

router.get("/fetchProjects", requireAuth, Ctrl.fetchProjects);
router.post("/createProject", requireAuth, Ctrl.createProject);


module.exports = router.routes();
