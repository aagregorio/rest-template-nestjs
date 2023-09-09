import { Injectable } from '@nestjs/common';
import { CreateVendorDto, UpdateVendorDto } from 'src/dtos';
import { Vendor } from '../entities';

@Injectable()
export class VendorMapper {
  fromCreateToDomain(dto: CreateVendorDto, id?: string): Vendor {
    const warehouse = new Vendor();

    if (id) {
      warehouse.id = id;
    }

    if (dto.address) {
      warehouse.address = dto.address;
    }

    warehouse.name = dto.name;

    if (dto.items && dto.items.length > 0) {
      // TODO Items mapper should be used here
      warehouse.items = dto.items;
    }

    return warehouse;
  }

  fromUpdateToDomain(actual: Vendor, update: UpdateVendorDto): Vendor {
    if (update.name) {
      actual.name = update.name;
    }

    if (update.address) {
      actual.address = update.address;
    }

    if (update.items && update.items.length > 0) {
      // TODO Items mapper should be used here
      // TODO Add/removal items management is pending
      actual.items = update.items;
    }

    return actual;
  }
}
