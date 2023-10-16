import { Expose } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCustomerDto {
  // @Expose()
  // @IsNotEmpty()
  // @IsUUID()
  // customer_id:string

  @Expose()
  @IsNotEmpty()
  @IsString()
  name: string;

  @Expose()
  @IsNotEmpty()
  @IsString()
  phone: number;

  @Expose()
  @IsNotEmpty()
  @IsString()
  address: string;
}
