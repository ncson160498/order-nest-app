import { IsOptional, IsString } from "class-validator";
import { Column } from "typeorm";

export class UpdateOrderDto {
  @IsString()
  @Column({ name: "order_name" })
  orderName: string;

  @IsString()
  @IsOptional()
  status: string;

  // @IsString()
  // total_price:string;
}
