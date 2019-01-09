const Router = require("koa-router");
const router = new Router();
const Ctrl = require("../controllers/posts");
const requireAuth = require("../controllers/auth").requireAuth;

router.get("/fetchPosts", requireAuth, Ctrl.fetchPosts);
router.post("/createPost", requireAuth, Ctrl.createPost);


module.exports = router.routes();
