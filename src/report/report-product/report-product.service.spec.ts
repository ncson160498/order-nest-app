import { Test, TestingModule } from '@nestjs/testing';
import { ReportProductService } from './report-product.service';

describe('ReportProductService', () => {
  let service: ReportProductService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReportProductService],
    }).compile();

    service = module.get<ReportProductService>(ReportProductService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
