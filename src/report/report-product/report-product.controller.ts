import { Controller, Get, Query } from "@nestjs/common";
import { query } from "express";
import { ReportProductService } from "./report-product.service";

@Controller("report-product")
export class ReportProductController {
  constructor(private reportSerVice: ReportProductService) {}
  @Get()
  getReport(@Query() query: any) {
    return this.reportSerVice.getRevenueProduct(query);
  }
}
