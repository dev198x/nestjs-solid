import { Module } from '@nestjs/common';
import { CatService } from './cat-service';
import { Cat } from './interfaces/cat.interface';

const mockCatsService = {
  // mock implementation
  findAll(): Cat[] {
    return [{ name: 'meo2', age: 20, breed: 'b2' }];
  },
};

class CustomCatService {
  findAll() {
    return [1, 2, 3];
  }
}

@Module({
  providers: [{ provide: CatService, useValue: new CustomCatService() }],
  exports: [CatService],
})
export class CustomProvideModule {}
