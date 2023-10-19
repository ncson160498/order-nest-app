import { Type } from "class-transformer";
import { IsOptional, IsString, IsUUID, ValidateNested } from "class-validator";
import { Column } from "typeorm";

export class UpdateOrderDto {
  @IsString()
  @IsOptional()
  orderName: string;

  @IsString()
  @IsOptional()
  status: string;

  // @IsString()
  // total_price:string;
  @IsOptional()
  // @ValidateNested({ each: true })
  @IsString()
  userID: string;
}
