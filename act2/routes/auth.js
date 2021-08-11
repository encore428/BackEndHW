const express = require('express')
const router = express.Router()

let authed_user = require('./authuser')

let { users } = require('../library');

router.post('/', (req, res) =>{
    if (req.body.name === '') {
        return res.status(401).send('Enter user and password to login<br><br><a href="/"><button>Re-try</button></a>');
    }
    authed_user.letout();
    for (i in users) {
        if (users[i].name.toLowerCase() === req.body.name.toLowerCase()) {
            if (users[i].pass === req.body.pass) {
                authed_user.letin(i)
            }
            break;
        }
    }
    if (authed_user.whosit() === null) {
        return res.status(401).send(`${req.body.name} login failed.<br><br><a href="/"><button>Re-try</button></a>`);
    }
    res.send(`Welcome ${users[authed_user.whosit()].name}!<br><br><a href="/"><button>Go home</button></a>`);
})

router.get('/', (req, res)=>{
    if (authed_user.whosit() === null) {
        res.status(400).send(`There is no logged-in user to log out of!<br><br><a href="/"><button>go Home</button></a>`);
    } else {
        let username = users[authed_user.whosit()].name;
        authed_user.letout()
        res.status(200).send(`${username} successfully logged ouot!<br><br><a href="/"><button>go Home</button></a>`);
    }
})

module.exports = router
