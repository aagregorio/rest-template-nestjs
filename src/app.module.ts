import { WarehouseModule } from './warehouse/warehouse.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { VendorModule } from './vendor/vendor.module';
import { ItemModule } from './item/item.module';

@Module({
  imports: [
    WarehouseModule,
    VendorModule,
    ItemModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: process.env.NODE_ENV === 'test' ? '.test.env' : undefined,
    }),
    DatabaseModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
