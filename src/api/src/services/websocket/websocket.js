const WebSocket = require('ws');

const startWebSocketServer = (port = 8080) => {
  const wss = new WebSocket.Server({ noServer: true });

  wss.on('connection', (ws) => {
    ws.on('message', (message) => {
      console.log('received: %s', message);
      ws.send(message); // Echo back the entire message as received
    });
  });

  wss.on('listening', () => {
    console.log(`WebSocket server is running on port ${wss.options.port}`);
  });

  wss.on('error', (error) => {
    console.error('WebSocket server error:', error);
  });

  wss.on('close', () => {
    console.log('WebSocket server closed');
  });

  wss.listen(port);

  return wss;
};

module.exports = startWebSocketServer;
