import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class PokemonService {
  private readonly logger = new Logger(PokemonService.name);

  findAll() {
    // this.logger.log(`Retrieve all Pokemon`);
    this.logger.error(
      { id: `retrieve-all-pokemon-error` },
      `Retrieve all Pokemon`,
    ); // object passed in first argument

    // ...
  }
}
