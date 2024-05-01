const express = require("express");
const cors = require("cors");
const appRouter = require("./routes");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/", appRouter);

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: "unknown endpoint" });
};

app.use(unknownEndpoint);

module.exports = app;