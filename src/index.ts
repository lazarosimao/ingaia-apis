import 'reflect-metadata';
import './usefulness/ModuleAlias';
import '@src/config/env';

import http from 'http';
import Api from '@src/Api';
import Logger from "@src/usefulness/Logger";

const server = http.createServer(Api);

server.listen(process.env.SERVER_PORT);
server.on('listening', () => Logger.info(`🚀️ ${process.env.SERVER_HOST}:${process.env.SERVER_PORT} up`));
server.on('error', (err: NodeJS.ErrnoException) => Logger.error(`Fail -> ${err}`));