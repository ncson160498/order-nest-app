import { Module } from "@nestjs/common";
import { ManageController } from "./manage.controller";
import { ManageService } from "./manage.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Manage } from "./entities/manage.entity";

@Module({
  controllers: [ManageController],
  providers: [ManageService],
  imports: [TypeOrmModule.forFeature([Manage])],
  exports: [ManageService],
})
export class ManageModule {}
