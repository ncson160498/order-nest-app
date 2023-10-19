import { Expose } from "class-transformer";
import { IsNotEmpty, IsString } from "class-validator";
import { JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { AdminAction } from "../entities/admin-action.entity";
import { Order } from "src/order/entities/order.entity";

export class createAdminAction {
  @Expose()
  @IsString()
  @IsNotEmpty()
  userID: string;

  @Expose()
  @IsString()
  @IsNotEmpty()
  orderID: string;

  @Expose()
  @IsString()
  @IsNotEmpty()
  action: string;
}
