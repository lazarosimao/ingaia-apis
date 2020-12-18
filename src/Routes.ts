import { Application, Request, Response } from 'express';
import { squareMeterValueController } from '@src/useCases/SquareMeterValue';
import { propertyValueController } from './useCases/PropertyValue';

class Routes {

  constructor(app: Application) {
    this.getRoutes(app);
  }

  getRoutes(app: Application): void {
    app.route('/api/v1/version').get((req: Request, res: Response) => res.json({ version: "1.0.0", developer: "Lázaro Simão" }));
    app.route('/api/v1/square-meter-value').get((req: Request, res: Response) => squareMeterValueController.handle(req, res));
    app.route('/api/v1/property-value').post((req: Request, res: Response) => propertyValueController.handle(req, res));
  }
}

export default Routes;