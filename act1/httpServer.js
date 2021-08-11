const { readFileSync } = require('fs');
const http = require('http');

const homepage = readFileSync('./index.html');
const errpage = readFileSync('./error.html');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, {'content-type': 'text/html'});
        res.write(homepage);
    } else if (req.url == '/plain') {
        res.writeHead(200, {'content-type': 'text/plain'});
        res.write(homepage);
    } else {
        res.writeHead(400, {'content-type': 'text/html'});
        res.write(errpage);
    }
    console.log(`There has been a ${req.method} request with ${req.url}`);
    res.end()
});


const port = server.listen(5000)
