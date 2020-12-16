import { SquareMeterRepository } from "@src/repositories/implementions/SquareMeterRepository";
import { HandleErrors } from "@src/usefulness/HandleErrors";

export class SquareMeterValueUseCase {
  constructor(
    private squareMeterRepository: SquareMeterRepository
  ) { }

  async execute(): Promise<number> {
    const value: number = await this.squareMeterRepository.getValue();
    if (!value) {
      throw new HandleErrors(400, 'value not found in the database');
    }

    return value;
  }
}