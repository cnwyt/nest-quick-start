// src/common/filters/http-exception.filter.ts
// 创建异常过滤器:
// $ nest g f common/filters/http-exception
import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from '@nestjs/common';
import { ApiException } from '../exceptions/api.exception';

@Catch()
export class HttpExceptionFilter<T> implements ExceptionFilter {
  // catch(exception: T, host: ArgumentsHost) {}
  catch(e: T, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    console.warn(e instanceof ApiException);

    if (e instanceof ApiException) {
      response.status(e.getStatus()).json({
        errCode: e.getErrorCode(),
        errMsg: e.getErrorMessage(),
        date: new Date().toLocaleDateString(),
        path: request.url,
      });
    } else {
      const status = e instanceof HttpException ? e.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;
      response.status(status).json({
        statusCode: status,
        date: new Date().toLocaleDateString(),
        path: request.url,
      });
    }
  }
}
