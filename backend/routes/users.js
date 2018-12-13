const Router = require("koa-router");
const router = new Router();
const Ctrl = require("../controllers/users");
const requireAuth = require("../controllers/auth").requireAuth;

router.get("/", requireAuth, Ctrl.getUser);
router.put("/", requireAuth, Ctrl.updateUserProfile);
router.delete("/", requireAuth, Ctrl.deleteUserById);

module.exports = router.routes();
