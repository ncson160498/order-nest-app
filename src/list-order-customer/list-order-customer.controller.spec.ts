import { Test, TestingModule } from '@nestjs/testing';
import { ListOrderCustomerController } from './list-order-customer.controller';

describe('ListOrderCustomerController', () => {
  let controller: ListOrderCustomerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ListOrderCustomerController],
    }).compile();

    controller = module.get<ListOrderCustomerController>(ListOrderCustomerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
