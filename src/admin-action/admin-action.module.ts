import { Module } from "@nestjs/common";
import { AdminActionController } from "./admin-action.controller";
import { AdminActionService } from "./admin-action.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AdminAction } from "./entities/admin-action.entity";

@Module({
  controllers: [AdminActionController],
  providers: [AdminActionService],
  imports: [TypeOrmModule.forFeature([AdminAction])],
  exports: [AdminActionService],
})
export class AdminActionModule {}
