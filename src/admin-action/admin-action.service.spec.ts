import { Test, TestingModule } from '@nestjs/testing';
import { AdminActionService } from './admin-action.service';

describe('AdminActionService', () => {
  let service: AdminActionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdminActionService],
    }).compile();

    service = module.get<AdminActionService>(AdminActionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
