import { Column, PrimaryGeneratedColumn } from "typeorm";
import { Expose } from "class-transformer";
import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateOrderItemDto {
  // @Expose()
  // @IsNotEmpty()
  // @IsString()
  // order_id:string

  @Expose()
  @IsNotEmpty()
  @IsString()
  productID: string;

  @Expose()
  @IsNotEmpty()
  @IsString()
  quantity: string;

  // @Expose()
  // @IsNotEmpty()
  // @IsString()
  // price: string;
}

export class UpdateOrderItemDto {
  @IsString()
  @IsOptional()
  @Column({ name: "product_id" })
  productId: string;

  @IsString()
  @IsOptional()
  quantity: string;

  // @IsString()
  // price: string;
}
