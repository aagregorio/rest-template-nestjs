import { WarehouseController } from './warehouse.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MappersModule } from 'src/mappers';
import { WarehouseService } from './warehouse.service';
import { Warehouse } from 'src/database/entities';

@Module({
  imports: [TypeOrmModule.forFeature([Warehouse]), MappersModule],
  controllers: [WarehouseController],
  providers: [WarehouseService],
})
export class WarehouseModule {}
