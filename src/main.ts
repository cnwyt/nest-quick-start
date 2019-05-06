import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
// import { MyLogger } from './common/my-logger';

async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  const app = await NestFactory.create(AppModule, {
    // logger: false,
    logger: console,
  });
  // 全局使用自定义的日志类
  // app.useLogger(app.get(MyLogger));

  // 全局使用自定义的异常过滤器
  app.useGlobalFilters(new HttpExceptionFilter());

  await app.listen(3000);
}
bootstrap();
