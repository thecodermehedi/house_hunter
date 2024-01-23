const express = require("express");
const os = require("node:os");
const applyMiddleware = require("./middlewares");
const app = express();
const geocodeRouter = require("./routes/geocodes");
const userRouter = require("./routes/users");
const connectToDb = require("./database");
const {port} = require("./config");

// Middlewares
applyMiddleware(app);

// Routes
app.use(geocodeRouter);
app.use(userRouter);

// Server
const runServer = async () => {
  try {
    const res = await connectToDb();
    if (res) {
      app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
      });
    }
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
runServer();

// Base route
app.get("/", (req, res) => {
  res.status(200).send("Server is running");
});

// Health route
app.get("/health", (req, res) => {
  res.status(200).json({status: "Server is healthy"});
});

// Error route
app.get("/error", (req, res) => {
  throw new Error("This is a test error.");
});

// Status route
app.get("/status", (req, res) => {
  res.status(200).json({
    uptime: process.uptime(),
    memory: process.memoryUsage(),
    load: os.loadavg(),
  });
});

// handling all unhandled rejections
app.all("*", (req, res, next) => {
  const error = new Error(`Can't find ${req.originalUrl} on this server`);
  error.status = "404";
  next(error);
});

// handling all unhandled errors
app.use((error, req, res, next) => {
  const statusCode = error.status || 500;
  const message = error.message || "Internal Server Error";
  res.status(Number(statusCode)).json({
    message,
    status: statusCode,
  });
});
