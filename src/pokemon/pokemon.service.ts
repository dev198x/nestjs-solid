import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class PokemonService {
  private readonly logger = new Logger(PokemonService.name);

  findAll() {
    this.logger.log(`Retrieve all Pokemon`);
    // ...
  }
}
