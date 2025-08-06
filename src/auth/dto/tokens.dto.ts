import { ApiProperty } from '@nestjs/swagger';

export class TokensDto {
  @ApiProperty({ example: 'eyJhbGciOiJIUzI1NiIsInR5cCI...' })
  accessToken: string;

  @ApiProperty({ example: 'eyJhbGciOiJIUzI1NiIsInR5cCI...' })
  refreshToken: string;
}
