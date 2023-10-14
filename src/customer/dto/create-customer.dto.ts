import { Expose } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString, Max, Min } from 'class-validator';

export class CreateCustomerDto {
  @Expose()
  @IsNotEmpty()
  @IsString()
  Name: string;

  @Expose()
  @IsNotEmpty()
  @IsString()
  Phone: number;

  @Expose()
  @IsNotEmpty()
  @IsString()
  Address: string;
}
