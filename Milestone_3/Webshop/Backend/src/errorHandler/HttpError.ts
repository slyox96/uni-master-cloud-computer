export class httpError extends Error {
  public code: number;

  constructor(message: string, errorCode: number) {
    super(message);
    this.code = errorCode;
    Object.setPrototypeOf(this, httpError.prototype);
  }
}