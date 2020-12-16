import { SquareMeterRepository } from "@src/repositories/implementions/SquareMeterRepository";
import { SquareMeterValueUseCase } from "./SquareMeterValueUseCase";
import { SquareMeterValueController } from "./SquareMeterValueController";

const squareMeterRepository = new SquareMeterRepository();
const squareMeterValueUseCase = new SquareMeterValueUseCase(squareMeterRepository);
const squareMeterValueController = new SquareMeterValueController(squareMeterValueUseCase);

export { squareMeterValueUseCase, squareMeterValueController }