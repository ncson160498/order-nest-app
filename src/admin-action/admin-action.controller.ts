import { Controller, Delete, Get, Param } from "@nestjs/common";
import { AdminActionService } from "./admin-action.service";

@Controller("admin-action")
export class AdminActionController {
  constructor(private adminActionService: AdminActionService) {}
  @Get()
  getAll() {
    return this.adminActionService.getAllAdminAction();
  }
  @Get(":id")
  getOne(@Param() id: string) {
    return this.adminActionService.getOne(id);
  }

  @Delete(":id")
  delete(@Param() id: string) {
    return this.adminActionService.deleteAdminAction(id);
  }
}
