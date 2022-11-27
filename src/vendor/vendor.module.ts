import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vendor } from 'src/database/entities';
import { MappersModule } from 'src/mappers';
import { VendorController } from './vendor.controller';
import { VendorService } from './vendor.service';

@Module({
  imports: [TypeOrmModule.forFeature([Vendor]), MappersModule],
  controllers: [VendorController],
  providers: [VendorService],
})
export class VendorModule {}
