import { Test, TestingModule } from '@nestjs/testing';
import { LofiApiController } from './lofi-api.controller';
import { LofiApiService } from './lofi-api.service';

describe('LofiApiController', () => {
  let controller: LofiApiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LofiApiController],
      providers: [LofiApiService],
    }).compile();

    controller = module.get<LofiApiController>(LofiApiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
