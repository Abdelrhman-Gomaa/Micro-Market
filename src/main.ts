import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
   
  
  //Swagger-UI
  const options = new DocumentBuilder()
    .setTitle('Mic-Market')
    .setDescription('Market Application')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document)

  // WE DON'T NEED THIS ANYMORE BECAUSE WE CREATE COMMON MODULE
  // call ApiKeyGuard wuth use useGlobalGuards (Guard Building Blook)
  //app.useGlobalGuards(new ApiKeyGuard()) 
  // call HttpExceptionFilter wuth use useGlobalFilters (Exception Filter Building Blook)
  //app.useGlobalFilters(new HttpExceptionFilter())

  await app.listen(3000);
}
bootstrap();
