require("dotenv").config();
const express = require("express");
const mysql = require("mysql2");

const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");

const app = express();
const port = process.env.PORT || 8080;
const hostname = process.env.HOST_NAME;

configViewEngine(app);
app.use(webRoutes);

const connection = mysql.createConnection({
  host: "localhost",
  port: "3307",
  user: "root",
  password: "123456",
  database: "hoidanit",
});

connection.query("select * from users u", function (err, results, fields) {
  console.log(results);
  // console.log(fields);
});

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
