import { Injectable } from '@nestjs/common';
import { Warehouse } from 'src/database/entities';
import { CreateWarehouseDto, UpdateWarehouseDto } from 'src/dtos';

@Injectable()
export class WarehouseMapper {
  fromCreateToDomain(dto: CreateWarehouseDto, id?: string): Warehouse {
    const warehouse = new Warehouse();

    if (id) {
      warehouse.id = id;
    }

    // TODO Address is pending

    warehouse.name = dto.name;

    if (dto.items && dto.items.length > 0) {
      // TODO Items mapper should be used here
      warehouse.items = dto.items;
    }

    return warehouse;
  }

  fromUpdateToDomain(actual: Warehouse, update: UpdateWarehouseDto): Warehouse {
    if (update.name) {
      actual.name = update.name;
    }

    // TODO Address is pending

    if (update.items && update.items.length > 0) {
      // TODO Items mapper should be used here
      // TODO Add/removal items management is pending
      actual.items = update.items;
    }

    return actual;
  }
}
