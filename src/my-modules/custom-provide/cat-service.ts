import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

export abstract class ABSCat {
  abstract findAll(): Cat[];
}

export interface MyCallbackInterface {
  (myId: string): void;
}

@Injectable()
export class CatService implements ABSCat {
  private readonly cats: Cat[] = [{ name: 'meo1', age: 10, breed: 'b' }];

  findAll(): Cat[] {
    return this.cats;
  }

  async doMainFlow(
    payload: { myId: string; name: string },
    callback: MyCallbackInterface,
  ) {
    const result = `CatService This is a sample result ${JSON.stringify(
      payload,
    )}`;
    console.log('🚀 ~ CatService ~ doMainFlow ~ result:', result);
    const { myId } = payload;
    callback(myId);
    return result;
  }
}
