const WebSocket = require('ws');

const startWebSocketServer = () => {
  const wss = new WebSocket.Server({ port: 8080 });

  wss.on('connection', (ws) => {
    ws.on('message', (message) => {
      console.log('received: %s', message);
      ws.send(message); // Echo back the entire message as received
    });
  });

  console.log('WebSocket server is running on ws://localhost:8080');
};

module.exports = startWebSocketServer;
