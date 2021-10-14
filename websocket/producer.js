require('dotenv').config()
const express = require('express')
const path = require('path')
const WebSocket = require('ws')

const WEBSOCKET_PORT = process.env.WEBSOCKET_PORT
const WEBSERVER_PORT = process.env.WEBSERVER_PORT

const meaning = 42
const endPoint = '/heartbeat'

const app = express()

const demo = process.env.DEMO || 'off'
const pulse = demo==='on'?1000:60000

let message
let clientSerial

if (demo==='on') {
    console.log('demo mode is on')
}

app.get(endPoint, (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(WEBSERVER_PORT, () => {
    console.log(`Web broadcast opened at http://localhost:${WEBSERVER_PORT}${endPoint}`);
});

const socketServer = new WebSocket.Server({ port: WEBSOCKET_PORT });
console.log(`WebSocket broadcast opened at ws://localhost:${WEBSOCKET_PORT}`)

setInterval(() => {
    clientSerial = 0
    dts = new Date();
    message = `I am alive at ${dts}`
    if (demo==='on' ? dts.getSeconds()===meaning : dts.getMinutes()===meaning) {
        message = message + ` ${meaning} is the meaning of life`
    }
    socketServer
        .clients
        .forEach(client => {
            clientSerial=clientSerial+1
            client.send(`[${clientSerial}]${message}`)
        });
        console.log(`This Server has broadcasted "${message}" to ${socketServer.clients.size} listener${socketServer.clients.size<2?'':'s'}.`);
}, pulse)

socketServer.on('connection', (socketClient) => {
    console.log('One listener added, number of active listeners', socketServer.clients.size);

    socketClient.on('close', (socketClient) => {
        console.log('One listener disconnected, number of active listeners: ', socketServer.clients.size);
    });
});

