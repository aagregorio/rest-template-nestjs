import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VendorController } from './controllers';
import { VendorService } from './services';
import { Vendor } from './entities';
import { VendorMapper } from './mappers';

@Module({
  imports: [TypeOrmModule.forFeature([Vendor])],
  controllers: [VendorController],
  providers: [VendorService, VendorMapper],
})
export class VendorModule {}
