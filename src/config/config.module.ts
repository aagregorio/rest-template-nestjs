import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CustomConfigService } from './config.service';

@Module({
  providers: [ConfigService, CustomConfigService],
  exports: [CustomConfigService],
})
export class CustomConfigModule {}
