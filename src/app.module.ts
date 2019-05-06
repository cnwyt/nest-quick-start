import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { TimeoutInterceptor } from './interceptors/timeout.interceptor';
import { ExcludeNullInterceptor } from './interceptors/excludeNull.interceptor';
import { LoggingInterceptor } from './interceptors/logging.interceptor';
import { ErrorsInterceptor } from './interceptors/errors.interceptor';
import { TodoModule } from './modules/todos/todo.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatsModule } from './modules/cats/cats.module';
import { LoggerMiddleware } from './middleware/logger.middleware';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    // Cats模块(DEMO)
    CatsModule,
    // TODO模块
    TodoModule,
  ],
  controllers: [
    AppController,
  ],
  providers: [
    AppService,
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
// export class AppModule {}
export class AppModule implements NestModule {
  // Applying middleware 
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(LoggerMiddleware).forRoutes('cats');
  }
}