import { Module } from "@nestjs/common";
import { ListOrderService } from "./list-order.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Order } from "src/order/entities/order.entity";
import { Customer } from "src/customer/entities/customer.entity";
import { OrderItem } from "src/order-item/entities/order-item.entity";
import { Product } from "src/product/entities/product.entity";
import { ListOrderController } from "./list-order.controller";

@Module({
  providers: [ListOrderService],
  imports: [TypeOrmModule.forFeature([Order, Customer, OrderItem, Product])],
  controllers: [ListOrderController],
  exports: [ListOrderService],
})
export class ListOrderModule {}
