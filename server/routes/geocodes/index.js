const router = require("../../utils/router");
const getGeocodes = require("../../controllers/geocodes/getGeocodes");

router.get("/api/v1/geocodes", getGeocodes);

module.exports = router;