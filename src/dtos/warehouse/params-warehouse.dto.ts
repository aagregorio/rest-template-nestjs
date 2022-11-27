import { IsString } from 'class-validator';

export class WarehouseParamsDto {
  @IsString()
  id: string;
}
