import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger } from 'nestjs-pino';
import { v4 as uuidv4 } from 'uuid';

const parseJWT = (jwt: string): any => {
  try {
    const jwtParts = jwt?.split('.');
    if (!jwt || jwtParts?.length !== 3) {
      return '';
    }

    const payload = JSON.parse(
      Buffer.from(jwtParts[1] || '', 'base64').toString(),
    );

    return payload;
  } catch (error) {
    console.error('[parseJWT] catch', error);
    throw error;
  }
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bufferLogs: true });
  // app.useLogger(app.get(Logger));
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

  // request id
  app.use((req: Request, res: Response, next) => {
    if (!req.headers['x-rq-id']) {
      req.headers['x-rq-id'] = uuidv4();
    }

    if (!req.headers['x-uid'] && req.headers['authorization']) {
      const token = req.headers['authorization'].split(' ')[1];
      if (token) {
        const jwt = parseJWT(token);
        req.headers['x-uid'] = JSON.stringify(jwt);
      }
    }

    next();
  });

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
