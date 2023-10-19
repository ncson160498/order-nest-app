import { Module } from "@nestjs/common";
import { ListOrderCustomerController } from "./list-order-customer.controller";
import { ListOrderCustomerService } from "./list-order-customer.service";

@Module({
  providers: [ListOrderCustomerService],
  controllers: [ListOrderCustomerController],
  exports: [ListOrderCustomerService],
})
export class ListOrderCustomerModule {}
