let express = require("express");
let app = express();
let path = require("path");
app.use("", require("./router"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "/public")));
console.log(__dirname);
app.listen("1234", () => {
  console.log("server start");
});
