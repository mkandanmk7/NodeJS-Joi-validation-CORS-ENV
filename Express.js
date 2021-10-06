const express = require("express");
const mongo = require("./mongo");
const { authMiddle, loginMiddle } = require("./shared/middleware");

const postData = require("./Router/Post");
const userData = require("./Router/Users");

const server = express();

// port number

const port = "3001";

//wrapping to async () with IIFE

(async () => {
  try {
    // mongoDB connect
    await mongo.connectDB();

    // parse req body string to json format

    server.use(express.json());

    // /user middle ware

    server.use("/users", userData);

    //authtoken mdware
    server.use(authMiddle);

    //middle ware common  no url condtions(loggin)

    server.use(loginMiddle);

    // url /posts condtion pass the "/posts to before call back"
    server.use("/posts", postData);

    //start the server;

    server.listen(port, () => {
      console.log(`server Started at ${port}`);
    });
  } catch (err) {
    console.log("Err here", err);
  }
})();
