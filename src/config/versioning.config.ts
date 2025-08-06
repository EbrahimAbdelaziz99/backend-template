import { INestApplication, VersioningType } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

export function setupVersioning(
  app: INestApplication,
  configService: ConfigService,
) {
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: configService.get<string>('API_VERSION') || '1',
  });
}
