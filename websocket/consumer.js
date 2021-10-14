require('dotenv').config()
const WebSocket = require('ws');
const fs = require('fs');

const WEBSOCKET_PORT = process.env.WEBSOCKET_PORT
const webSocketAddr = `ws://localhost:${WEBSOCKET_PORT}`

const webSocket = new WebSocket(webSocketAddr);

webSocket.onopen = () => {
    console.log(`Connected to Web socket at ${webSocketAddr}`);
};

webSocket.onmessage = (message) => {
    console.log(message.data)
    fs.appendFile('log.txt', message.data+'\n', function (error) {if (error) throw error;});
};
