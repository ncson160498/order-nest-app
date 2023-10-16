import { IsNumber, IsString } from 'class-validator';

export class UpdateCustomerDto {
  @IsString()
  name: string;

  @IsString()
  phone: number;

  @IsString()
  address: string;
}
