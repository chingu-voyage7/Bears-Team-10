const Router = require("koa-router");
const router = new Router();
const Ctrl = require("../controllers/posts");
const requireAuth = require("../controllers/auth").requireAuth;

router.get("/fetchPosts", requireAuth, Ctrl.fetchPosts);
router.post("/newPost", requireAuth, Ctrl.newPost);


module.exports = router.routes();
