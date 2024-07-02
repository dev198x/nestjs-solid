import { Injectable, OnModuleInit } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { CatService } from './my-modules/custom-provide/cat-service';

@Injectable()
export class AppMyService implements OnModuleInit {
  private service;
  constructor(private readonly moduleRef: ModuleRef) {}

  onModuleInit() {
    this.service = this.moduleRef.get<CatService>(CatService, {
      strict: false,
    });
    console.log('onModuleInit', this.service); // false
  }

  async callServiceByName() {
    // const service = this.moduleRef.get('CatService', { strict: false });
    // if (!service || typeof service['findAll'] !== 'function') {
    //   throw new Error(`Service or method not found: CatService.findAll`);
    // }
    return this.service['findAll']();
  }
}
