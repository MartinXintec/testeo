import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {   // Metodo main, levanta el servidor por metodo NestFactory y define puerto a utilizar con app.listen
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
