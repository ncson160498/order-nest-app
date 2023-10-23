import { Module } from "@nestjs/common";
import { ReportProductController } from "./report-product.controller";
import { ReportProductService } from "./report-product.service";

@Module({
  controllers: [ReportProductController],
  providers: [ReportProductService],
  exports: [ReportProductService],
})
export class ReportProductModule {}
