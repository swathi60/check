var express = require("express");
var cors = require("cors");
var MongoClient = require("mongodb").MongoClient;

var connectionstring =
  "mongodb+srv://swathi:database1@cluster0.aguofmt.mongodb.net/shopping1?retryWrites=true&w=majority";
var PORT = process.env.PORT || 4005;
var app = express();

// Use the cors middleware
app.use(
  cors({
    origin: "https://swathi60.github.io", // Replace with your frontend URL
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    optionsSuccessStatus: 204,
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/det", (req, res) => {
  MongoClient.connect(connectionstring).then((clientObj) => {
    var database = clientObj.db("shopping1");
    database
      .collection("test1")
      .find({})
      .toArray()
      .then((result) => {
        res.send(result);
        res.end();
      });
  });
});

app.listen(PORT, () => {
  console.log("Server started at: " + PORT);
});
