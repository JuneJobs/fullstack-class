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
*/

//example 7
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

router.get("/", (req, res) => {
    console.log(path);
    res.sendFile(`${path}/web-client/react2.html`);
});

const mysql = require('mysql');
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'test1234@',
    database: 'fullstackDB'
});

connection.connect();
connection.query('SELECT 1 + 1 AS solution', (err, results, faields) => {
    if (err) {
        console.error(err);
    } else {
        console.log(`The solution is:, ${results[0].solution}`);
    }
});

connection.end();
*/

//example 8
/*
connection.connect();
let check_user_exists = (email, cb) => {
    connection.query(
    `
        SELECT count(id) as CNT
          FROM user
         WHERE email = '${email}';
    `
    , (err, results, faields) => {
        if(err) {
            console.error(err);
        } else {
            console.log(results[0].CNT);
            let user_exist = results[0].CNT;
            if(user_exist === 0){
                cb(false);
            } else if(user_exist === 1){
                cb(true);
            }
        }
    });
};

let add_user = (email, cb) => {
    connection.query(
    `
        INSERT INTO user (email)
        VALUES ('${email}');
    `
    , (err, results, faields) => {
        if(err) {
            console.error(err);
            cb(false);
        } else {
            cb(true);
        }
    });
}

check_user_exists('j.jobs1028@gmail.com', (result)=> {
    if(result === true){
        console.log('This user already exist.');
    } else if (result === false) {
        console.log('Add new user.');
        add_user('j.jobs1028@gmail.com', (result) => {
            if(result === true){
                console.log('Added new user.');
            } else if (result === false) {
                console.log('Something wrong.');
            }
        });
    }
});
*/
//example 9
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
    res.sendFile(`${path}/web-client/react2.html`);
});

const mysql = require('mysql');
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'test1234@',
    database: 'fullstackDB'
});

connection.connect();
let check_user_exists = (email, cb) => {
    connection.query(
    `
        SELECT count(id) as CNT
          FROM user
         WHERE email = '${email}';
    `
    , (err, results, faields) => {
        if(err) {
            console.error(err);
        } else {
            console.log(results[0].CNT);
            let user_exist = results[0].CNT;
            if(user_exist === 0){
                cb(false);
            } else if(user_exist === 1){
                cb(true);
            }
        }
    });
};

let add_user = (email, cb) => {
    connection.query(
    `
        INSERT INTO user (email)
        VALUES ('${email}');
    `
    , (err, results, faields) => {
        if(err) {
            console.error(err);
            cb(false);
        } else {
            cb(true);
        }
    });
}

// +
router.post('/add_user', (req, res) => {
    let email = '';
    email = req.body.email;
    if(email === undefined){
        res.send({
            result: 2
        });
    } else {
        check_user_exists(email, (result)=> {
            if(result === true){
                console.log('This user already exist.');
                res.send({
                    result: 1
                });
            } else if (result === false) {
                console.log('Add new user.');
                add_user(email, (result) => {
                    if(result === true){
                        console.log('Added new user.');
                        res.send({
                            result: 0
                        });
                    } else if (result === false) {
                        console.log('Something wrong.');
                        res.send({
                            result: 1
                        });
                    }
                });
            }
        });
    }
});

app.listen(_webPort, () => {
    console.log(`web server running on ${_webPort}`);
});

process.on('SIGINT', () => {
    connection.end();
    process.exit();
});
