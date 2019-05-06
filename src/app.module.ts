import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './controllers/cats.controller';
import { CatsService } from './services/cats.service';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { TimeoutInterceptor } from './interceptors/timeout.interceptor';
import { ExcludeNullInterceptor } from './interceptors/excludeNull.interceptor';
import { LoggingInterceptor } from './interceptors/logging.interceptor';
import { ErrorsInterceptor } from './interceptors/errors.interceptor';
import { TodoModule } from './modules/todos/todo.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    // TODO模块
    TodoModule,
  ],
  controllers: [
    AppController,
    CatsController
  ],
  providers: [
    AppService,
    CatsService,
    {
      provide: APP_INTERCEPTOR,
      useClass: TimeoutInterceptor,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ExcludeNullInterceptor,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ErrorsInterceptor,
    },
  ],
})
export class AppModule {}
