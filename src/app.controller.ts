import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { PokemonService } from './pokemon/pokemon.service';
import { CatService } from './my-modules/custom-provide/cat-service';
import { Cat } from './my-modules/custom-provide/interfaces/cat.interface';
import { Injectable } from '@nestjs/common';
import { AppMyService } from './app.my-service';

@Controller()
@Injectable()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly appMyService: AppMyService,
    private readonly pokemonService: PokemonService,
    private readonly catService: CatService,
  ) {}

  @Get()
  getHello(): string {
    this.pokemonService.findAll();
    return this.appService.getHello();
  }

  @Get('cats')
  getCats(): Cat[] {
    return this.catService.findAll();
  }

  @Get('module-ref')
  getModuleRef() {
    return this.appMyService.callServiceByName();
  }

  @Get('cats/callback')
  callback() {
    return this.catService.doMainFlow({ myId: '1000', name: 'Dat' }, (myId) => {
      console.log(`AppController, ${myId}`);
      return true;
    });
  }
}
