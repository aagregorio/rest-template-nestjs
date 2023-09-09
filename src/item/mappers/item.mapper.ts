import { Injectable } from '@nestjs/common';
import { CreateItemDto, UpdateItemDto } from 'src/dtos';
import { Item } from '../entities';

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
