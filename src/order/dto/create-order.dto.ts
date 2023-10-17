import { Expose, Type } from "class-transformer";
import {
  IsArray,
  IsDateString,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
  ValidateNested,
} from "class-validator";
import { CreateOrderItemDto } from "src/order-item/dto/order-item.dto";

export class CreateOrderBodyDto {
  @Expose()
  @IsNotEmpty()
  @IsUUID()
  customerID: string;

  @Expose()
  @IsOptional()
  @IsString()
  orderName: string;

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
  totalPrice: string;

  @Expose()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateOrderItemDto)
  public orderItems: CreateOrderItemDto[];
}
