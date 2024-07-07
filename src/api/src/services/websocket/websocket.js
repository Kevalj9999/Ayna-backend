const WebSocket = require('ws');

const startWebSocketServer = (port) => {
  const wss = new WebSocket.Server({ port });

  wss.on('connection', (ws) => {
    ws.on('message', (message) => {
      console.log('received: %s', message);
      ws.send(message); // Echo back the entire message as received
    });
  });

  console.log(`(Websocket.js) WebSocket server is running on port ${port}`);
  return wss;
};

module.exports = startWebSocketServer;
