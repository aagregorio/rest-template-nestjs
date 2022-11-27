import { IsArray, IsOptional, IsString, ValidateNested } from 'class-validator';
import { AddressDto } from '../common/address.dto';

export class CreateWarehouseDto {
  @IsString()
  name: string;

  @IsOptional()
  @ValidateNested()
  address?: AddressDto;

  @IsOptional()
  @IsArray()
  items?: any[];
}
