export class HandleErrors extends Error{
  public readonly message: string;
  public readonly statusCode: number;

  constructor(statusCode: number, message: string) {
    super(message);
    this.message = message;
    this.statusCode = statusCode;
  }
}