// src/common/exceptions/api.exception.ts

import { HttpException, HttpStatus } from '@nestjs/common';
import { ApiErrorCode } from '../enums/api-error-code.enum';

export class ApiException extends HttpException {

  private msg: string;
  private code: ApiErrorCode;

  constructor(errorMessage: string, errorCode: ApiErrorCode, statusCode?: HttpStatus) {

    super(errorMessage, statusCode);

    this.msg = errorMessage;
    this.code = errorCode;
  }

  getErrorCode(): ApiErrorCode {
    return this.code;
  }

  getErrorMessage(): string {
    return this.msg;
  }
}
