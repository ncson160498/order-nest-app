import { Controller, Get, Param, Query } from "@nestjs/common";
import { ListOrderCustomerService } from "./list-order-customer.service";

@Controller("list-order-customer")
export class ListOrderCustomerController {
  constructor(private listOrderCustomerService: ListOrderCustomerService) {}

  @Get()
  getAll(@Query() query: any) {
    return this.listOrderCustomerService.getAllOrderOfCustomer(query?.name);
  }
  @Get(":id")
  getCustomer(@Param() id: string) {
    return this.listOrderCustomerService.getOrderToCustomer(id);
  }
}
