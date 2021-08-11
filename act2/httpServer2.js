const express = require('express');
const {urlencoded} = require('express');
const app = express();
const logger = require('./routes/logger')

const api = require('./routes/api')
const auth = require('./routes/auth')

const authuser = require('./routes/authuser')

let { users } = require('./library');
let { books } = require('./library');
const guardpost = require('./routes/guardpost');

app.use(logger, guardpost);
app.use(express.static('./static'));
app.use(express.urlencoded({extended: false}));

app.use('/api/user', api)

app.use('/login', auth)

app.listen(5000, ()=>{
    console.log('Server is listening at port 5000.');
})    
