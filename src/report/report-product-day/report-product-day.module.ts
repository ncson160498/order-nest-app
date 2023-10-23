import { Module } from "@nestjs/common";
import { ReportProductDayController } from "./report-product-day.controller";
import { ReportProductDayService } from "./report-product-day.service";

@Module({
  controllers: [ReportProductDayController],
  providers: [ReportProductDayService],
  exports: [ReportProductDayService],
})
export class ReportProductDayModule {}
