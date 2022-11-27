import { IsString, IsOptional, IsArray, ValidateNested } from 'class-validator';
import { AddressDto } from '../common/address.dto';

export class UpdateWarehouseDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsOptional()
  @ValidateNested()
  address?: AddressDto;

  @IsOptional()
  @IsArray()
  items?: any[];
}
