const express = require('express')
const router = express.Router()

let { users } = require('../library');
let { books } = require('../library');

router.get('/', (req, res)=>{
    res.status(200).json({success: true, library:users})
})

router.post('/', (req, res) =>{
    if (req.body.name === '') {
        return res.status(401).send('Please enter a user name to retrieve info of<br><br><a href="/"><button>Re-try</button></a>');
    }
    if (req.body.name.toLowerCase() === 'all') {
        return res.status(200).json({success: true, library:books});
    }
    let found_user = null;
    for (i in users) {
        if (users[i].name.toLowerCase() === req.body.name.toLowerCase()) {
            found_user = i;
            break;
        }
    }
    if (found_user === null) {
        return res.status(401).send(`User ${req.body.name} not found.<br><br><a href="/"><button>Re-try</button></a>`);
    }
    let found_info = null;
    for (i in books) {
        if (books[i].likedby === users[found_user].id) {
            found_info = i;
            break;
        }
    }
    if (found_info === null) {
        return res.status(401).send(`User ${req.body.name} has no favorite book.<br><br><a href="/"><button>Re-try</button></a>`);
    }
    return res.status(200).json({success: true, user:users[found_user], library:books[found_info]});
})

module.exports = router
