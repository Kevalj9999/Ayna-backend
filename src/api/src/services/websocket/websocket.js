const WebSocket = require('ws');

const startWebSocketServer = (port) => {
  const wss = new WebSocket.Server({ port });

  wss.on('connection', (ws) => {
    ws.on('message', (message) => {
      console.log('received: %s', message);
      ws.send(message); // Echo back the entire message as received
    });
  });

  console.log(`WebSocket server is running on port ${port}`);

  // Periodically log the WebSocket URL
  setInterval(() => {
    console.log(`WebSocket server is still running on ws://localhost:${port}`);
  }, 120000); // 120000 ms = 2 minutes

  return wss;
};

module.exports = startWebSocketServer;
