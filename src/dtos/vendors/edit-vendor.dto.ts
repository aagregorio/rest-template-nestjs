import { IsString, IsOptional, IsArray } from 'class-validator';

export class UpdateVendorDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsOptional()
  address?: any;

  @IsOptional()
  @IsArray()
  items?: any[];
}
