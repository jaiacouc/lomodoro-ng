import { Test, TestingModule } from '@nestjs/testing';
import { LofiApiService } from './lofi-api.service';

describe('LofiApiService', () => {
  let service: LofiApiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LofiApiService],
    }).compile();

    service = module.get<LofiApiService>(LofiApiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
