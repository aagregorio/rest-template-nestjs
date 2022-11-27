import {
  IsEmail,
  IsMobilePhone,
  IsPostalCode,
  IsString,
} from 'class-validator';

export class AddressDto {
  @IsString()
  street: string;

  @IsString()
  city: string;

  @IsString()
  country: string;

  @IsString()
  @IsPostalCode('any')
  zipCode: string;

  @IsString()
  @IsMobilePhone()
  phone: string;

  @IsString()
  @IsEmail()
  email: string;
}
