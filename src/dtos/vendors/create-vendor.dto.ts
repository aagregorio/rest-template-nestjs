import { IsArray, IsOptional, IsString, ValidateNested } from 'class-validator';
import { AddressDto } from '../common/address.dto';

export class CreateVendorDto {
  @IsString()
  name: string;

  @IsOptional()
  @ValidateNested()
  address?: AddressDto;

  @IsOptional()
  @IsArray()
  items?: any[];
}
