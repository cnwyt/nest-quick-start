// timeout.interceptor.ts
import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { timeout, tap } from 'rxjs/operators';

@Injectable()
export class TimeoutInterceptor implements NestInterceptor {
  private timeout = 3000;
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('-------> [TimeoutInterceptor] ' + new Date())
    return next.handle().pipe(
        timeout(this.timeout)
        // tap(() => {
        //     var t = Date.now();
        //     console.log('-------> [' + t + '] request time out: ' + this.timeout + ' ms.')
        //     timeout(this.timeout)
        // }),
    )
  }
}