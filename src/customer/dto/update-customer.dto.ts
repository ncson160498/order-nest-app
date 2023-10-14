import { IsNumber, IsString } from 'class-validator';

export class UpdateCustomerDto {
  @IsString()
  Name: string;

  @IsNumber()
  Phone: number;
  
  @IsString()
  Address: string;
}
