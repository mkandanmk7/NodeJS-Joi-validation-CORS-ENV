const { MongoClient } = require("mongodb"); // mclient is class given by m-db driver

// **** env handle this
// const URL = "mongodb://localhost:27017";
// const DB_NAME = "p_posts";

// create obj using obj literals pass url to constructor param..
const client = new MongoClient(process.env.URL);

module.exports = {
  // initally db is null

  db: null, // for accessing db intially null

  // collections :
  posts: null,

  users: null,

  //connection db; using connect();
  async connectDB() {
    await client.connect(); //connected
    console.log("connected to Mongo DB", process.env.URL);

    //selecting db
    this.db = client.db(process.env.DB_NAME); // db() given by client ;
    console.log("Database Selected", process.env.DB_NAME);

    this.posts = this.db.collection("p_posts");
    this.users = this.db.collection("users");
  },
};
