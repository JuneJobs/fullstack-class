//example 1
/*
console.log("hello guys!");
*/

//example 2
/*
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

app.listen(_webPort, () => {
    console.log(`web server running on ${_webPort}`);
});
*/

//example 3
/*
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
//+
router.get("/", (req, res) => {
    res.sendFile(`${path}/web-client/index.html`);
});

app.listen(_webPort, () => {
    console.log(`web server running on ${_webPort}`);
});
*/

//example 4
/*
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
// !
router.get("/", (req, res) => {
    console.log(path);
    res.sendFile(`${path}/web-client/react.html`);
});
// +
router.get("/app.js", (req, res) => {
    res.sendFile(`${path}/web-client/app.js`);
});

app.listen(_webPort, () => {
    console.log(`web server running on ${_webPort}`);
});
*/

//example 6

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

router.get("/", (req, res) => {
    console.log(path);
    res.sendFile(`${path}/web-client/react.html`);
});

router.get("/app.js", (req, res) => {
    res.sendFile(`${path}/web-client/app.js`);
});

//+
router.post("/sum", (req, res) => {
    let sum = req.body.param1 + req.body.param2;
    let result = {
        sum: sum
    }
    res.send(result);
})

app.listen(_webPort, () => {
    console.log(`web server running on ${_webPort}`);
});
