const express = require('express')
const router = express.Router()

const {Pool} = require('pg');
const connectionInfo = `postgres://test1:test1@localhost:5432/test1`;
const pool = new Pool({connectionString: connectionInfo});

const storage = require('./storage')

router.post('/', (req, res) =>{
    if (req.body.name === '') {
        return res.status(401).send('Enter user and password to login<br><br><a href="/"><button>Re-try</button></a>');
    }
    storage.letout();  // log out current user
    let sql_str = `SELECT * FROM users WHERE lower(name) = lower('${req.body.name.toLowerCase()}') and pass = '${req.body.pass}'`;
    pool.query(
        sql_str,
        [],
        function (err, result) {
            if (err) {
                console.log(err);
                return res.status(401).send(`${req.body.name} DB failure.<br><br><a href="/"><button>Re-try</button></a>`);
                //process.exit(1);
            } else {
                console.log(result.rows);
                if (result.rowCount === 1) {
                    console.log(result.rows[0].name, result.rows[0].id);
                    storage.letin(result.rows[0].name, result.rows[0].id);
                    return res.send(`Welcome ${storage.auname()}!<br><br><a href="/"><button>Go home</button></a>`);
                    //process.exit(0);
                } else {
                    return res.status(401).send(`${req.body.name} login failed.<br><br><a href="/"><button>Re-try</button></a>`);
                    //process.exit(1);
                }
            }
        }         
    );
})

router.get('/', (req, res)=>{
    if (storage.whosit() === null) {
        res.status(400).send(`There is no logged-in user to log out of!<br><br><a href="/"><button>go Home</button></a>`);
    } else {
        let username = storage.auname();
        storage.letout();
        res.status(200).send(`${username} successfully logged ouot!<br><br><a href="/"><button>go Home</button></a>`);
    }
})

module.exports = router
