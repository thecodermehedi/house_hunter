const router = require("../../utils/router");
const RegisterUser = require("../../controllers/users/RegisterUser");
const LoginUser = require("../../controllers/users/LoginUser");
const logoutUser = require("../../controllers/users/LogoutUser");

router.post("/api/v1/auth/register", RegisterUser);
router.post("/api/v1/auth/login", LoginUser);
router.get("/api/v1/auth/logout", logoutUser);

module.exports = router;
