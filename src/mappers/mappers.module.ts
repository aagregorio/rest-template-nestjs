import { Module } from '@nestjs/common';
import { ItemMapper } from './item.mapper';
import { VendorMapper } from './vendor.mapper';
import { WarehouseMapper } from './warehouse.mapper';

@Module({
  imports: [],
  controllers: [],
  providers: [WarehouseMapper, VendorMapper, ItemMapper],
})
export class MappersModule {}
