import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { otelSDK } from './tracing';

async function bootstrap() {
  // Start SDK before nestjs factory create
  await otelSDK.start();

  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

  // integrate API-DOCS
  const config = new DocumentBuilder()
    .setTitle('NestJS-SOLID example')
    .setDescription('The NestJS-SOLID API description')
    .setVersion('1.0')
    .addTag('NestJS-SOLID')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(9000);
}
bootstrap();
