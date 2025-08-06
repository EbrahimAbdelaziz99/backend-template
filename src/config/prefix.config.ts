import { INestApplication } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

export function setupGlobalPrefix(
  app: INestApplication,
  configService: ConfigService,
) {
  app.setGlobalPrefix(configService.get<string>('API_PREFIX') || 'api');
}
