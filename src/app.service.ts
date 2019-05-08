import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getIndex() : Object {
    return {
      code: 200, 
      msg: "OK",
      data: {
        "time" : new Date().getTime(),
      }, 
    }
  }

  getVersion(version: string): Object {
    return {
      code: 200, 
      msg: "",
      data: {
        "version": version,
        "time" : new Date().getTime(),
        // "test": null
      }, 
    }
  }
}
