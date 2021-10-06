const cors = require("cors");
require("dotenv").config();
const express = require("express");
const mongo = require("./shared/mongo");
const { authMiddle, loginMiddle } = require("./shared/middleware");

const postData = require("./Router/Post");
const userData = require("./Router/Users");

const server = express();

// port number

const PORT = process.env.PORT || "3001";

//wrapping to async () with IIFE

(async () => {
  try {
    // mongoDB connect
    await mongo.connectDB();

    //cors  allowing to use api everyone
    server.use(cors()); // for specific cors({origin:["netlify.com"]})

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

    server.listen(process.env.PORT, () => {
      console.log(`server Started at ${process.env.PORT}`);
    });
  } catch (err) {
    console.log("Err here", err);
  }
})();
