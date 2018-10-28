/* app/server.ts */

// Import everything from express and assign it to the express variable
import { createConnection } from 'typeorm';
import express from 'express';
import 'reflect-metadata';
import http from 'http';
import { logger } from './utils/logger';

const log = logger.getLogger('server');

// Create a new express application instance
const app: express.Application = express();
// The port the express app will listen on
const port = process.env.PORT || 3000;

const server = http.createServer(app);

createConnection('mysqlConnection').then(async (connection: any) => {
  // here you can start to work with your entities
  log.info('mysql connect success', connection);
}).catch(error => log.error(error));


// Serve the application at the given port
server.listen(port, () => {
    // Success callback
    log.info(`Listening at https://localhost:${port}/`);
});
