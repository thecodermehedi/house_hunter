const mongoose = require("mongoose");
const {dbUri, dbUser, dbPass, dbName, clusterName} = require("../config");

const getCorrectUri = () => {
  let correctUri;
  if (typeof dbUri === "string") {
    correctUri = dbUri;
    correctUri = correctUri.replace("<username>", dbUser);
    correctUri = correctUri.replace("<password>", dbPass);
    correctUri = correctUri.replace("<dbname>", dbName);
    correctUri = correctUri.replace("<clustername>", clusterName);
  }
  return correctUri;
};

const connectToDb = async () => {
  try {
    console.log("Connecting to DB...");
    const uri = getCorrectUri();
    await mongoose.connect(uri);
    console.log("Connected to Database");
    return true;
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectToDb;
