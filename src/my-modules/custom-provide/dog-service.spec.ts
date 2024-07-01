import { Test, TestingModule } from '@nestjs/testing';
import { DogService } from './dog-service';

describe('DogService', () => {
  let provider: DogService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DogService],
    }).compile();

    provider = module.get<DogService>(DogService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
