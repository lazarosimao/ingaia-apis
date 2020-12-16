import { Application, Request, Response } from 'express';
import { squareMeterValueController } from './useCases/SquareMeterValue';

class Routes {

  constructor(app: Application) {
    this.getRoutes(app);
  }

  getRoutes(app: Application): void {
    app.route('/api/v1/version').get((req: Request, res: Response) => res.send('Version: 1.0.0'));
    app.route('/api/v1/square-meter-value').get((req: Request, res: Response) => squareMeterValueController.handle(req, res));
  }
}

export default Routes;