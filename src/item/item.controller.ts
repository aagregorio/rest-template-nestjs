import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { CreateItemDto, ItemParamsDto, UpdateItemDto } from 'src/dtos';
import { ItemService } from './item.service';

@Controller('item')
export class ItemController {
  constructor(private readonly itemService: ItemService) {}

  @Get()
  getItems() {
    return this.itemService.getItems();
  }

  @Post()
  createItem(@Body() item: CreateItemDto) {
    return this.itemService.createItem(item);
  }

  @Get('/:id')
  getItem(@Param() params: ItemParamsDto) {
    return this.itemService.checkIfItemExist(params.id);
  }

  @Put('/:id')
  updateItem(@Param() params: ItemParamsDto, @Body() item: CreateItemDto) {
    return this.itemService.updateItem(params.id, item);
  }

  @Patch('/:id')
  editItem(@Param() params: ItemParamsDto, @Body() item: UpdateItemDto) {
    return this.itemService.editItem(params.id, item);
  }

  @Delete('/:id')
  deleteItem(@Param() params: ItemParamsDto) {
    return this.itemService.deleteItem(params.id);
  }
}
