import { ListOrderService } from "./list-order-admin.service";
import { Controller, Get, Param, Query } from "@nestjs/common";

@Controller("list-order-admin")
export class ListOrderController {
  constructor(private listOrderService: ListOrderService) {}

  @Get()
  async getAll(@Query() query: any) {
    return this.listOrderService.getListOrder(query?.name);
  }
  @Get(":id")
  async getOne(@Param() id: string) {
    return this.listOrderService.getOneOrder(id);
  }
}
