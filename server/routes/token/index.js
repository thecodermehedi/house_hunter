const getToken = require("../../controllers/token/getToken");
const router = require("../../utils/router");

router.post("/api/v1/auth/jwt", getToken);

module.exports = router;