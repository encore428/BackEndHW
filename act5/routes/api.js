const express = require('express')
const router = express.Router()

const {Pool} = require('pg');
const connectionInfo = `postgres://test1:test1@localhost:5432/test1`;
const pool = new Pool({connectionString: connectionInfo});

const storage = require('./storage')

router.get('/', (req, res)=>{
    let sql_str = `SELECT id, name FROM users`;
    pool.query(
        sql_str,
        [],
        function (err, result) {
            if (err) {
                console.log(err);
                return res.status(401).send(`DB failure listing all users.<br><br><a href="/"><button>Re-try</button></a>`);
                //process.exit(1);
            }
            return res.status(200).json({success: true, users:result.rows});
            //process.exit(0);
        }
    );
})

router.post('/', (req, res) =>{
    if ((req.body.name === null) || (req.body.name === '')) {
        let sql_str = `SELECT b.id, b.title, b.author, u.name as likedby, b.instock FROM books b LEFT JOIN users u ON (b.likedby = u.id)`;
        pool.query(
            sql_str,
            [],
            function (err, result) {
                if (err) {
                    console.log(err);
                    return res.status(401).send(`DB failure listing all books.<br><br><a href="/"><button>Re-try</button></a>`);
                    //process.exit(1);
                }
                return res.status(200).json({success: true, books:result.rows});
                //process.exit(0);
            }
        );
    } else {
        let sql_str = `SELECT u.name as user, 'likes' as says, b.title, 'by' as authored, b.author FROM books b, users u WHERE b.likedby = u.id AND lower(u.name) = lower('${req.body.name}')`;
        console.log(sql_str);
        pool.query(
            sql_str,
            [],
            function (err, result) {
                if (err) {
                    console.log(err);
                    return res.status(401).send(`DB failure listing books for ${req.body.name}.<br><br><a href="/"><button>Re-try</button></a>`);
                    //process.exit(1);
                }
                if (result.rowCount === 0) {
                    return res.status(401).send(`user ${req.body.name} not found, or has no favorite books.<br><br><a href="/"><button>Re-try</button></a>`);
                } else {
                    return res.status(200).json({success: true, books:result.rows});
                }
                //process.exit(0);
            }
        );

    }
})

module.exports = router
