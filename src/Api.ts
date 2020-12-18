import express from 'express';
import { Application } from 'express';
import Routes from './Routes';
import  swaggerUi from 'swagger-ui-express';
import swaggerConfig from './config/swagger';

class Api {
  public express: Application;

  constructor() {
    this.express = express();
    this.middleware();
  }

  middleware(): void {
    this.express.use(express.json());
    this.router(this.express);
    this.express.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerConfig));
  }

  private router(app: Application): void {
    new Routes(app);
  }
}

export default new Api().express;