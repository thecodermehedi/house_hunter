const router = require("../../utils/router");
const addUser = require("../../controllers/users/addUser");

router.post("/api/v1/users", addUser);

module.exports = router;