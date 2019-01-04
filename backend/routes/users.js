const Router = require("koa-router");
const router = new Router();
const Ctrl = require("../controllers/users");
const requireAuth = require("../controllers/auth").requireAuth;

router.get("/getUser", requireAuth, Ctrl.getUser);
//router.get("/hello", requireAuth, Ctrl.hello);/
router.put("/updateProfileComponent", requireAuth, Ctrl.updateProfileComponent);
router.put("/updateUserProfile", requireAuth, Ctrl.updateUserProfile);
router.delete("/", requireAuth, Ctrl.deleteUserById);


module.exports = router.routes();
