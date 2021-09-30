const WebSocket = require('ws');
const url = 'ws://0.0.0.0:8002';
var socket = new WebSocket(url);

socket.on('open', (ws) => {
    console.log('web socket abierto', JSON.stringify(ws))
})

socket.on('error', (ws, error) => {
    console.error(error, JSON.stringify(ws))
})