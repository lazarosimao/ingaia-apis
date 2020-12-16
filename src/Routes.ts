import { Application, Request, Response } from 'express';

class Routes {

  constructor(app: Application) {
    this.getRoutes(app);
  }

  getRoutes(app: Application): void {
    app.route('/api/v1/version').get((req: Request, res: Response) => res.send('Version: 1.0.0'));
  }
}

export default Routes;