const Geocode = require("../../models/Geocode");

const getGeocodes = async (req, res) => {
  try {
    const data = await Geocode.find();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({message: err.message});
  }
}

module.exports = getGeocodes;