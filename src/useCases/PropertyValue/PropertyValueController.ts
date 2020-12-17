import { Response, Request } from "express";
import { PropertyValueUseCase } from "./PropertyValueUseCase";

export class PropertyValueController {
  constructor(
    private propertyValueUseCase: PropertyValueUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const data = {
      m2: request.body.m2
    }

    try {
      const result = await this.propertyValueUseCase.execute(data);

      return response.status(200).json({
        statusCode: 200,
        message: 'ok',
        payload: result
      });

    } catch (error) {
      return response.status(error.statusCode || 500).json({
        statusCode: error.statusCode || 500,
        message: error.message || 'Falha na comunicação com o servidor.'
      });
    }
  }
  
}