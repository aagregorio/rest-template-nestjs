import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { CustomConfigModule } from 'src/config/config.module';
import { CustomConfigService } from 'src/config/config.service';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [CustomConfigModule],
      useFactory: (customConfigService: CustomConfigService) => ({
        type: 'postgres',
        host: customConfigService.PG_HOST,
        port: customConfigService.PG_PORT,
        username: customConfigService.PG_USER,
        password: customConfigService.PG_PASSWORD,
        database: customConfigService.PG_DB,
        retryDelay: customConfigService.PG_RETRY_INTERVAL * 1000,
        connectTimeoutMS: customConfigService.PG_TIMEOUT * 1000,
        entities: [join(__dirname, './entities/**{.ts,.js}')],
        synchronize: false,
        keepConnectionAlive: false,
        migrationsRun: true,
        migrationsTableName: 'migrations',
        migrations: [join(__dirname, './migrations/**{.ts,.js}')],
        cli: {
          migrationsDir: 'src/database/migrations',
        },
      }),
      inject: [CustomConfigService],
    }),
  ],
})
export class DatabaseModule {}
