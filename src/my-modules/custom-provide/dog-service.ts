import { Injectable } from '@nestjs/common';
import { Dog } from './interfaces/dog.interface';

@Injectable()
export class DogService {
  private readonly cats: Dog[] = [{ name: 'dog', age: 10 }];

  findAll(): Dog[] {
    return this.cats;
  }
}
