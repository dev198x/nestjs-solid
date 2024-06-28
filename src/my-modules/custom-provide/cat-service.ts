import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatService {
  private readonly cats: Cat[] = [{ name: 'meo1', age: 10, breed: 'b' }];

  findAll(): Cat[] {
    return this.cats;
  }
}
