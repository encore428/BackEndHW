
// adding a medthod (logger) to be executed after receipt of requests before it is processed.
const express = require('express')
const app = express()


const logger = (req, res, next)=> {
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    const qry = req.query;   // http://5000/about?user=007&pwd=james  such data from the request is passed back this way
    console.log(method, url, time, req.user, qry);
    next();  // important to have to so as to passs the control to the app.get
             // if send() is used the response is sent to the client and not transferred
             // to the next app.get
}

app.use(logger); // this statement if used will cause logger to be executed on each http request
                 // if logger is also present in app.get, it gets executed twice

app.get('/', logger, (req, res)=>{
    res.send('This is my Home page.')
})

app.get('/about', logger, (req, res)=> {
    res.status(200).send('this is my about page.')
})

app.listen(5000, ()=>{
    console.log('Server is listening at port 5000');
})


/*
Using express with app.use
const express = require('express')
const path = require('path');
const app = express()

app.use(express.static('../navbar-app'));

app.get('/', (req, res)=>{
    //res.sendFile(path.resolve(__dirname, '../navbar-app/index.html'))
    res.sendFile('../navbar-app/index.html')
})

app.get('/about', (req, res)=> {
    res.status(200).send('this is my abuot page.')
})

app.all('*', (req, res)=>{
    res.status(404).send(`<h1>The page {req.url} does not exist</h1>`)
})
app.listen(5000)

*/
/*
link each resource to the pysical file
const { readFilSync, readFileSync } = require('fs');
const http = require('http')

const homepage = readFileSync('../navbar-app/index.html');
const homeLogic = readFileSync('../navbar-app/browser-app.js');
const homeImage = readFileSync('../navbar-app/logo.svg');
const homeStyle = readFileSync('../navbar-app/styles.css');
const errpage = readFileSync('./error.html');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, {'content-type': 'text/html'});
        res.write(homepage);
        res.end(`This is in response to a ${req.method} request`);
    } else if (req.url == '/plain') {
        res.writeHead(200, {'content-type': 'text/plain'});
        res.write(homepage);
        res.end(`This is in response to a ${req.method} request`);
    } else if (req.url == '/styles.css') {
        res.writeHead(200, {'content-type': 'text/css'});
        res.write(homeStyle);
        res.end()
    } else if (req.url == '/logo.svg') {
        res.writeHead(200, {'content-type': 'image/svg+xml'});
        res.write(homeImage);
        res.end()
    } else if (req.url == '/browser-app.js') {
        res.writeHead(200, {'content-type': 'text/javascript'});
        res.write(homeLogic);
        res.end()
    } else {
        res.writeHead(400, {'content-type': 'text/html'});
        res.write(errpage);
        res.end(`This is in response to a ${req.method} request`);
    }
});


const port = server.listen(5000)
*/

/*

    if (req.url == '/') {
        res.end('Welcome')
    }
    else if (req.url == '/about') {
        res.end('This is me')
    }
    else res.end(`
    <h1>Not here</h1>
    find me at home
    `)
})
*/