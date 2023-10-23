import { Test, TestingModule } from '@nestjs/testing';
import { ReportProductDayService } from './report-product-day.service';

describe('ReportProductDayService', () => {
  let service: ReportProductDayService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReportProductDayService],
    }).compile();

    service = module.get<ReportProductDayService>(ReportProductDayService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
