import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class CustomConfigService {
  readonly NODE_ENV: string;
  readonly PG_HOST: string;
  readonly PG_PORT: number;
  readonly PG_USER: string;
  readonly PG_PASSWORD: string;
  readonly PG_DB: string;
  readonly PG_RETRY_INTERVAL: number;
  readonly PG_TIMEOUT: number;

  constructor(private configService: ConfigService) {
    this.PG_HOST = this.configService.get<string>('PG_HOST');
    this.PG_PORT = this.configService.get<number>('PG_PORT');
    this.PG_USER = this.configService.get<string>('PG_USER');
    this.PG_PASSWORD = this.configService.get<string>('PG_PASSWORD');
    this.PG_DB = this.configService.get<string>('PG_DB');
    this.PG_RETRY_INTERVAL =
      this.configService.get<number>('PG_RETRY_INTERVAL');
    this.PG_TIMEOUT = this.configService.get<number>('PG_TIMEOUT');
  }
}
