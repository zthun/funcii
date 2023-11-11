import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import helmet from 'helmet';
import { ZHelpfulModule } from './app/helpful-module';

(async function () {
  const app = await NestFactory.create(ZHelpfulModule);
  app.setGlobalPrefix('api');

  const config = new DocumentBuilder()
    .setTitle('Helpful API')
    .setDescription('Simple API for creating standard data without the need for language adapters')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  app.use(helmet());

  await app.listen(3000);
})();
