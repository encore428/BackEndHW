let authed_user = require('./authuser')

const guardpost = (req, res, next)=> {
    const url = req.url.toLowerCase().substr(0,9);
    if (url === '/api/user') {
        if (authed_user.whosit() === null) {
            res.status(401).send(`You have to be logged in to use this function!<br><br><a href="/"><button>go Login</button></a>`);
        } else {
            next()
        }
    } else {
        next()
    }

}
module.exports = guardpost
