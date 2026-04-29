const express = require("express");
const cors = require("cors");

const healthRoutes = require("./routes/healthRoutes");
const { errorHandler } = require("./middlewares/errorHandler");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/health", healthRoutes);

app.use(errorHandler);

module.exports = app;
