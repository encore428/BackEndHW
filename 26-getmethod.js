const express = require('express');
const app = express();

let {user} = require('./day 1 act 2/library.js');

app.get('/api/user', (req, res) =>{
    res.status(200).json({success: true, library:user});
})

app.listen(5000, ()=>{
    console.log('Servr is listening')
})