import { Expose } from 'class-transformer';
import {
  IsDateString,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

export class CreateOrderDto {
  @Expose()
  @IsNotEmpty()
  @IsUUID()
  customer_id: string;

  @Expose()
  @IsOptional()
  @IsString()
  order_name: string;

  // @Expose()
  // @IsOptional()
  // @IsString()
  // status: string;

  // @Expose()
  // @IsDateString()
  // @IsOptional()
  // createdDate: Date;

  @Expose()
  @IsOptional()
  @IsString()
  total_price: string;
}
