const { json } = require("express");
const express = require("express");
const app = express();

app.listen("3000");

/* GET
app.route("/").get((req, res) => res.send("hello"));
app.route("/sobre").get((req, res) => res.send("ola"));
*/

/*POST

//middleware e a ponte entre as req
app.use(express.json());

app.route("/").post((req, res) => res.send(req.body));
*/

/* PUT
//middleware
app.use(express.json());

let author = "eri";

app.route("/").get((req, res) => res.send(author));

app.route("/").put((req, res) => {
  author = req.body.author;
  res.send(author);
});*/

app.route("/").get((req, res) => {
  res.send("hello");
});
