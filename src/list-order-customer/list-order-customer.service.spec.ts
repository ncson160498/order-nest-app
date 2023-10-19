import { Test, TestingModule } from '@nestjs/testing';
import { ListOrderCustomerService } from './list-order-customer.service';

describe('ListOrderCustomerService', () => {
  let service: ListOrderCustomerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ListOrderCustomerService],
    }).compile();

    service = module.get<ListOrderCustomerService>(ListOrderCustomerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
