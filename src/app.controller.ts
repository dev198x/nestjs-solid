import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { PokemonService } from './pokemon/pokemon.service';
import { CatService } from './my-modules/custom-provide/cat-service';
import { Cat } from './my-modules/custom-provide/interfaces/cat.interface';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
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
}
