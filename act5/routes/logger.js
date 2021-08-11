const storage = require('./storage')

const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().getTime();
    console.log('logger:', 'there is a', method, 'at',url, 'time', time, 'user ', storage.auname());
    next()
}
module.exports = logger
