require("dotenv").config();
const express = require("express");
const connection = require("./config/database");

const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");

const app = express();
const port = process.env.PORT || 8080;
const hostname = process.env.HOST_NAME;

// Config request body ;
app.use(express.json());
app.use(express.urlencoded({ express: true }));
configViewEngine(app);
app.use(webRoutes);

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
