import { Injectable } from '@nestjs/common';
import { Item } from 'src/database/entities';
import { CreateItemDto, UpdateItemDto } from 'src/dtos';

@Injectable()
export class ItemMapper {
  fromCreateToDomain(dto: CreateItemDto, id?: string): Item {
    const warehouse = new Item();

    if (id) {
      warehouse.id = id;
    }

    warehouse.name = dto.name;
    return warehouse;
  }

  fromUpdateToDomain(actual: Item, update: UpdateItemDto): Item {
    if (update.name) {
      actual.name = update.name;
    }

    return actual;
  }
}
