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
import { CreateVendorDto, UpdateVendorDto, VendorParamsDto } from 'src/dtos';
import { VendorService } from './vendor.service';

@Controller('warehouse')
export class VendorController {
  constructor(private readonly vendorService: VendorService) {}

  @Get()
  getVendors() {
    return this.vendorService.getVendors();
  }

  @Post()
  createVendor(@Body() warehouse: CreateVendorDto) {
    return this.vendorService.createVendor(warehouse);
  }

  @Get('/:id')
  getVendor(@Param() params: VendorParamsDto) {
    return this.vendorService.checkIfVendorExist(params.id);
  }

  @Put('/:id')
  updateVendor(
    @Param() params: VendorParamsDto,
    @Body() warehouse: CreateVendorDto,
  ) {
    return this.vendorService.updateVendor(params.id, warehouse);
  }

  @Patch('/:id')
  editVendor(
    @Param() params: VendorParamsDto,
    @Body() warehouse: UpdateVendorDto,
  ) {
    return this.vendorService.editVendor(params.id, warehouse);
  }

  @Delete('/:id')
  deleteVendor(@Param() params: VendorParamsDto) {
    return this.vendorService.deleteVendor(params.id);
  }
}
