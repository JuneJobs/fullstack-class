//example 1
/*
console.log("hello guys!");
*/

//example 2
const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");

const _webPort = 80;
global.app = express();
app.use(cors());
global.router = express.Router();
global.path = __dirname;

app.use(bodyParser.json());
app.use("/", router);

app.listen(_webPort, function() {
    console.log(`web server running on ${_webPort}`);
});