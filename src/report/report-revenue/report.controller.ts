import { Controller, Get, Query } from "@nestjs/common";
import { ReportService } from "./report.service";
import { query } from "express";
import { Product } from "src/product/entities/product.entity";

@Controller("report")
export class ReportController {
  constructor(private reportService: ReportService) {}
  @Get()
  getRevenueDay(@Query() time: any) {
    // console.log(time);
    return this.reportService.getRevenueDay(time);
  }
}
