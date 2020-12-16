import 'reflect-metadata';
import './usefulness/ModuleAlias';
import '@src/config/env';

import http from 'http';
import Api from '@src/Api';
import Logger from "@src/usefulness/Logger";
import Connection from './usefulness/Connection';

const server = http.createServer(Api);

server.listen(process.env.SERVER_PORT);
server.on('listening', async () => {
  Logger.info(`🚀️ ${process.env.SERVER_HOST}:${process.env.SERVER_PORT} started`);
  try {
    await Connection.initConnection(`${process.env.MONGO_URL}`);
    Logger.info(`🚀️ database started`);
    
  } catch (err) {
    Logger.error(`Unable to connect to Mongo! ${err}`);
  }
});
server.on('error', (err: NodeJS.ErrnoException) => Logger.error(`Fail -> ${err}`));