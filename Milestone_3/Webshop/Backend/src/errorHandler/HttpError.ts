export class HttpError extends Error {
    public code: number;
  
    constructor(message: string, errorCode: number) {
      super(message);
      this.code = errorCode;
  
      // Set the prototype explicitly to support instanceof HttpError
      Object.setPrototypeOf(this, HttpError.prototype);
    }
  }
  