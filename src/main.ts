import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const port = 3000;
  const app = await NestFactory.create(AppModule);
  await app.listen(port, () => {
    console.log('server is running on port: http://127.0.0.1:' + port);
  });
}
bootstrap();
