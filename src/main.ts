import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, //Caso seja definida como verdadeiro, irá exluir da validação todos objetos que não tiverem um @type de validação.
    forbidNonWhitelisted: true //Irá excluir os itens que não tiverem no padrão do objeto que foi instanciado
  }))
  await app.listen(3000);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
