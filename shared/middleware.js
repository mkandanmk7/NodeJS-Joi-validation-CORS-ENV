const jwt = require("jsonwebtoken");

const middleware = {
  authMiddle(req, res, next) {
    const token = req.headers["auth-token"];
    console.log(token);

    //exist the token
    if (token) {
      try {
        console.log("try in");
        // checkking;  validation;
        req.user = jwt.verify(token, "muthu@123"); // token is random string for userID,and mail
        console.log("user", req.user);
        next();
      } catch (err) {
        res.sendStatus(401);
      }
    } else {
      res.sendStatus(401);
    }
  },
  loginMiddle(req, res, next) {
    console.log(
      `${new Date()} - ${req.user.email} - ${req.url} - ${req.method}`
    ); // loggin user details;
    next();
  },
};

module.exports = middleware;
