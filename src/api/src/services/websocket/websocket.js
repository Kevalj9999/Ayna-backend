const { Server } = require('socket.io');

const startSocketServer = (server) => {
  const io = new Server(server, {
    cors: {
      origin: ['http://localhost:3000', 'https://ayna-frontend.netlify.app'],
      methods: ['GET', 'POST'],
      allowedHeaders: ['Authorization'],
      credentials: true,
    }
  });

  io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('message', (message) => {
      console.log('received: %s', message);
      io.emit('message', message); // Broadcast the message to all connected clients
    });

    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
  });

  console.log('WebSocket server is running');
};

module.exports = startSocketServer;
