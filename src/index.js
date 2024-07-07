'use strict';

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({ strapi }) {
    // Import and start the WebSocket server
    const WebSocketServer = require('./api/src/services/websocket/websocket');

    const port = 8080;
    const wss = WebSocketServer(port);

    wss.on('listening', () => {
      console.log(`(Index.js) WebSocket server is listening on port ${port}`);
    });

  },
};
