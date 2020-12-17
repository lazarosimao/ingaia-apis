import SquareMeterService from "@src/services/SquareMeterService";
import { HandleErrors } from "@src/usefulness/HandleErrors";
import { IPropertyValueDTO } from "./IPropertyValueDTO";

export class PropertyValueUseCase {
  constructor(
    private squareMeterService: SquareMeterService
  ) { }

  async execute(data: IPropertyValueDTO): Promise<any> {

    const m2 = data.m2;
    if (!this.isNumeric(m2)) {
      throw new HandleErrors(400, 'value m2 not or invalid send');
    }

    const isValidadeRange = this.rangeValue(m2);
    if (!isValidadeRange) {
      if (m2 < 10) {
        throw new HandleErrors(400, 'Invalid parameter. Value less than ten square meters');
      }

      if (m2 > 10000) {
        throw new HandleErrors(400, 'Invalid parameter. Value greater than ten thousand square meters');
      }
    }

    const valueM2 = await this.squareMeterService.getValueSquareMeter();
    if (!valueM2.data.payload) {
      throw new HandleErrors(400, 'value not found in the database');
    }

    const price = this.calculate(m2, valueM2.data.payload);
    return {
      m2: m2,
      valueM2: valueM2.data.payload,
      propertyPrice: price
    }

  }

  isNumeric(value: any){
    return !isNaN(value);
  }

  rangeValue(value: number): boolean {
    if (value >= 10 && value <= 10000) {
      return true;
    }
    return false;
  }

  calculate(m2: number, valueM2: number): number {
    return m2 * valueM2;
  }
}

