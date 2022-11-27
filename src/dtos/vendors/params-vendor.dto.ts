import { IsString } from 'class-validator';

export class VendorParamsDto {
  @IsString()
  id: string;
}
