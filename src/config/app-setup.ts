import { INestApplication } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { globalValidationPipe } from './validation.config';
import { setupSwagger } from './swagger.config';
import { createCorsConfig } from './cors.config';
import { setupVersioning } from './versioning.config';
import { setupGlobalPrefix } from './prefix.config';

export function setupApp(app: INestApplication) {
  const configService = app.get(ConfigService);

  app.useGlobalPipes(globalValidationPipe);
  app.enableCors(createCorsConfig(configService));
  setupVersioning(app, configService);
  setupGlobalPrefix(app, configService);
  setupSwagger(app);
}
