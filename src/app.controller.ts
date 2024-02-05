import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { PokemonService } from './pokemon/pokemon.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly pokemonService: PokemonService,
  ) {}

  @Get()
  getHello(): string {
    this.pokemonService.findAll();
    return this.appService.getHello();
  }
}
