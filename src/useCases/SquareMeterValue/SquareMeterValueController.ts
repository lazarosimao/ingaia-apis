import { Response, Request } from "express";
import { SquareMeterValueUseCase } from "./SquareMeterValueUseCase";

export class SquareMeterValueController {
  constructor(
    private squareMeterValueUseCase: SquareMeterValueUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> { 
    try {
      const result = await this.squareMeterValueUseCase.execute();

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