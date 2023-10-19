import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { AdminAction } from "./entities/admin-action.entity";
import { Repository } from "typeorm";

@Injectable()
export class AdminActionService {
  constructor(
    @InjectRepository(AdminAction)
    private adminActionRepo: Repository<AdminAction>
  ) {}

  getAllAdminAction() {
    return this.adminActionRepo.find();
  }
  getOne(id: any) {
    return this.adminActionRepo.findOne({ where: { id: id.id } });
  }
  deleteAdminAction(id: string) {
    return this.adminActionRepo.delete(id);
  }
}
