import { PropertyValueUseCase } from "./PropertyValueUseCase";
import SquareMeterService from "@src/services/SquareMeterService";
import { PropertyValueController } from "./PropertyValueController";

const squareMeterService = new SquareMeterService();
const propertyValueUseCase = new PropertyValueUseCase(squareMeterService);
const propertyValueController = new PropertyValueController(propertyValueUseCase);

export { propertyValueUseCase, propertyValueController }
