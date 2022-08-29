"use strict";

require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3001;

app.get("/test", (request, response) => {
  response.send("test request received");
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));

// ROUTES
app.get("/", (request, response) => {
  response.status(200).send("Welcome!");
});

app.get("*", (request, response) => {
  response.status(404).send("Not available");
});

//ERROR
app.use((error, request, response, next) => {
  response.status(500).send(error.message);
});

// LISTEN
app.listen(PORT, () => console.log("listening on Port ${PORT}"));
