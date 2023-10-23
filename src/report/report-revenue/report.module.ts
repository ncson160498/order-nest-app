import { Module } from "@nestjs/common";
import { ReportController } from "./report.controller";
import { ReportService } from "./report.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ReportProductModule } from "../report-product/report-product.module";

@Module({
  controllers: [ReportController],
  providers: [ReportService],
  exports: [ReportService],
  imports: [ReportProductModule],
})
export class ReportModule {}
