import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  private version:string = "0.0.2";
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/version')
  getVersion(): Object {
    return this.appService.getVersion(this.version);
  }

  @Get('404')
  page404() {
    throw new HttpException({
      status: HttpStatus.FORBIDDEN,
      error: 'This is a custom message',
    }, 403);
  }

  @Get('test/res1')
  testResponse() {
    // const ctx = host.switchToHttp();
    // const response = ctx.getResponse<Response>();
    // const request = ctx.getRequest<Request>();
    // const status = exception.getStatus();
    // response
    //   .status(status)
    //   .json({
    //     statusCode: status,
    //     timestamp: new Date().toISOString(),
    //     path: request.url,
    //   });
  }
}
