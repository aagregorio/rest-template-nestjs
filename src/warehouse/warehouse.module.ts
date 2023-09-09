import { WarehouseController } from './controllers/warehouse.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WarehouseService } from './services';
import { WarehouseMapper } from './mappers';
import { Warehouse } from './entities';

@Module({
  imports: [TypeOrmModule.forFeature([Warehouse])],
  controllers: [WarehouseController],
  providers: [WarehouseService, WarehouseMapper],
})
export class WarehouseModule {}
