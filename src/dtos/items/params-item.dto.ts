import { IsString } from 'class-validator';

export class ItemParamsDto {
  @IsString()
  id: string;
}
