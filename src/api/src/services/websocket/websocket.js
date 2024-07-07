const WebSocket = require('ws');

const startWebSocketServer = () => {
  const wss = new WebSocket.Server({ noServer: true });

  wss.on('connection', (ws) => {
    ws.on('message', (message) => {
      console.log('received: %s', message);
      ws.send(message); // Echo back the entire message as received
    });
  });

  console.log(`WebSocket server is running on port ${wss.options.port}`);
  return wss;
};

module.exports = startWebSocketServer;
