import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

export abstract class ABSCat {
  abstract findAll(): Cat[];
}

@Injectable()
export class CatService implements ABSCat {
  private readonly cats: Cat[] = [{ name: 'meo1', age: 10, breed: 'b' }];

  findAll(): Cat[] {
    return this.cats;
  }
}
