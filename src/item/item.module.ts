import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemController } from './controllers';
import { ItemService } from './services';
import { ItemMapper } from './mappers';
import { Item } from './entities';

@Module({
  imports: [TypeOrmModule.forFeature([Item])],
  controllers: [ItemController],
  providers: [ItemService, ItemMapper],
})
export class ItemModule {}
