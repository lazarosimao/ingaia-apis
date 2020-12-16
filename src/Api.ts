import express from 'express';
import { Application } from 'express';
import Routes from './Routes';

class Api {
  public express: Application;

  constructor() {
    this.express = express();
    this.middleware();
  }

  middleware(): void {
    this.express.use(express.json());
    this.router(this.express);
  }

  private router(app: Application): void {
    new Routes(app);
  }
}

export default new Api().express;