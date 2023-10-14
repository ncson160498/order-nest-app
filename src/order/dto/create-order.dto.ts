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
  Customer_Id: string;

  @Expose()
  @IsOptional()
  @IsString()
  Order_Name: string;

  @Expose()
  @IsOptional()
  @IsString()
  Status: string;

  @Expose()
  @IsDateString()
  @IsOptional()
  createdDate: string;

  @Expose()
  @IsOptional()
  @IsString()
  Total_Price: string;
}
