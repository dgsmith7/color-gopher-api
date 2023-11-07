import express from "express";
import cors from "cors";
import { router } from "./routes/gopher.js";

const app = express();

//middleware
app.use(express.json());
app.use(cors());

// router
app.use("/gopher", router);

// base route
app.get("/", (req, res) => {
  res.json(
    "Welcome to the Color Gopher API - Copyright (c) 2023 by David G. Smith"
  );
});

// serve up the css and images statically
app.use(express.static("public"));

// error logger
app.use((err, request, response, next) => {
  console.log(err);
  next(err); // calling next middleware
});

// generic error-handling
app.use((err, req, res, next) => {
  res.header("Content-Type", "application/json");
  let obj = {
    error: {
      message: "An error occurred.",
      statusCode: err.statusCode,
      url: "https://rapidapi.com/color-gopher-api/docs.html",
    },
  };
  res.send(obj);
});

// 404 error-handling
app.use((req, res, next) => {
  let obj = {
    error: {
      message: "There is no such page. Try another URL.",
      statusCode: 404,
      url: "https://rapidapi.com/color-gopher-api/docs.html",
    },
  };
  res.status(404);
  res.send(obj);
});

// listen on port for requests
const port = process.env.PORT || 5500;
app.listen(port, () => console.log(`Listening on Port: ${port}`));
