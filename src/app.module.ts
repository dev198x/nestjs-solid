import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import './prisma.service';
import { PrismaService } from './prisma.service';

//SRP
import { ProductsModule } from './modules/SRP/products/products.module';
import { OrdersModule } from './modules/SRP/orders/orders.module';
import { LSPOrdersModule } from './modules/LSP/orders/orders.module';
import { PokemonService } from './pokemon/pokemon.service';

@Module({
  imports: [ProductsModule, OrdersModule, LSPOrdersModule],
  controllers: [AppController],
  providers: [AppService, PokemonService],
})
export class AppModule {}
