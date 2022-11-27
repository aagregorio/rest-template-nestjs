import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from 'src/database/entities';
import { MappersModule } from 'src/mappers';
import { ItemController } from './item.controller';
import { ItemService } from './item.service';

@Module({
  imports: [TypeOrmModule.forFeature([Item]), MappersModule],
  controllers: [ItemController],
  providers: [ItemService],
})
export class ItemModule {}
