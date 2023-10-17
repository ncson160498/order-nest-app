import { PrimaryGeneratedColumn } from "typeorm";
import { Expose } from "class-transformer";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateOrderItemDto {
  // @Expose()
  // @IsNotEmpty()
  // @IsString()
  // order_id:string

  @Expose()
  @IsNotEmpty()
  @IsString()
  product_id: string;

  @Expose()
  @IsNotEmpty()
  @IsString()
  quantity: string;

  @Expose()
  @IsNotEmpty()
  @IsString()
  price: string;
}

export class UpdateOrderItemDto {
  @IsString()
  quantity: string;

  @IsString()
  price: string;
}
