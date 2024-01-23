const cors = require("cors");
const express = require("express");
const morgan = require("morgan");
const {nodeEnv, corsOrigin, corsLocal} = require("../config");

const applyMiddleware = (app) => {
  let corsOptions;
  if (nodeEnv === "production") {
    corsOptions = {
      origin: [corsOrigin],
      credentials: true,
    };
  } else {
    corsOptions = {
      origin: [corsLocal],
      credentials: true,
    };
  }

  app.use(cors(corsOptions));
  app.use(express.json());

  if (nodeEnv === "development") {
    app.use(morgan("dev"));
  }
};

module.exports = applyMiddleware;
