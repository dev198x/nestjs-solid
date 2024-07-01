import { Module } from '@nestjs/common';
import { ABSCat, CatService } from './cat-service';
import { Cat } from './interfaces/cat.interface';
import { DogService } from './dog-service';

const mockCatsService = {
  // mock implementation
  findAll(): Cat[] {
    return [{ name: 'meo2', age: 20, breed: 'b2' }];
  },
};

class CustomCatService implements ABSCat {
  findAll(): Cat[] {
    return [{ name: 'cname1', age: 2, breed: 'bb1' }];
  }
}

@Module({
  providers: [
    // { provide: CatService, useValue: mockCatsService },
    // { provide: CatService, useValue: new CustomCatService() },
    // { provide: CatService, useClass: CustomCatService },
    CatService,

    DogService,
  ],
  exports: [CatService],
})
export class CustomProvideModule {}
