require('dotenv').config({ path: '.env' });
const createServer = require('./createServer');
const db = require('./db');

const server = createServer();

server.start(
  {
    cors: {
      credentials:  true,
      origin: process.env.FRONTEND_URL,
    },
  },
  deets => {
    console.log('------------------------------------------------------------');
    console.log('------------------------------------------------------------');
    console.log(`Server is now running on port http://localhost:${deets.port}`);
    console.log('------------------------------------------------------------');
    console.log('------------------------------------------------------------');
  }
);
