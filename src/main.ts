import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
    logger: ['error', 'warn', 'log'],
  });

  const configService = app.get(ConfigService);

  await app.listen(configService.get('PORT') || 4000);
  Logger.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
