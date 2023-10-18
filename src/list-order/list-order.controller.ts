import { ListOrderService } from "./list-order.service";
import { Controller, Get, Param, Query } from "@nestjs/common";

@Controller("list-order")
export class ListOrderController {
  constructor(private listOrderService: ListOrderService) {}

  @Get()
  async getAll(@Query() query: any) {
    console.log(query);
    return this.listOrderService.getListOrder(query?.son);
  }
  @Get(":id")
  async getOne(@Param() id: string) {
    return this.listOrderService.getOneOrder(id);
  }
}
