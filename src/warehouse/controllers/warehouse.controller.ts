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
import {
  CreateWarehouseDto,
  WarehouseParamsDto,
  UpdateWarehouseDto,
} from 'src/dtos';
import { WarehouseService } from '../services';

@Controller('warehouse')
export class WarehouseController {
  constructor(private readonly warehouseService: WarehouseService) {}

  @Get()
  getWarehouses() {
    return this.warehouseService.getWarehouses();
  }

  @Post()
  createWarehouse(@Body() warehouse: CreateWarehouseDto) {
    return this.warehouseService.createWarehouse(warehouse);
  }

  @Get('/:id')
  getWarehouse(@Param() params: WarehouseParamsDto) {
    return this.warehouseService.checkIfWarehouseExist(params.id);
  }

  @Put('/:id')
  updateWarehouse(
    @Param() params: WarehouseParamsDto,
    @Body() warehouse: CreateWarehouseDto,
  ) {
    return this.warehouseService.updateWarehouse(params.id, warehouse);
  }

  @Patch('/:id')
  editWarehouse(
    @Param() params: WarehouseParamsDto,
    @Body() warehouse: UpdateWarehouseDto,
  ) {
    return this.warehouseService.editWarehouse(params.id, warehouse);
  }

  @Delete('/:id')
  deleteWarehouse(@Param() params: WarehouseParamsDto) {
    return this.warehouseService.deleteWarehouse(params.id);
  }
}
