/* app/server.ts */

// Import everything from express and assign it to the express variable
import { createConnection } from 'typeorm';
import express from 'express';
import 'reflect-metadata';
import http from 'http';
import { logger } from './utils/logger';
import { PingRoute } from './routes/ping.routes';

const log = logger.getLogger('server');

createConnection('mysqlConnection').then(async connection => {
  // here you can start to work with your entities
  log.info('mysql connect success');

  // createBaseCase();
  // tslint:disable-next-line:no-unused-expression
  import('./scripts/users');

}).catch(error => log.error('Mysql connection error'));

// Create a new express application instance
const app: express.Application = express();
// The port the express app will listen on
const port = process.env.PORT || 3000;

const server = http.createServer(app);

app.use('/ping', PingRoute);

// Serve the application at the given port
server.listen(port, () => {
    // Success callback
    log.info(`Listening at https://localhost:${port}/`);
});
