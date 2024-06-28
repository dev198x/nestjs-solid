import { Test, TestingModule } from '@nestjs/testing';
import { CatService } from './cat-service';

describe('CatService', () => {
  let provider: CatService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CatService],
    }).compile();

    provider = module.get<CatService>(CatService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
