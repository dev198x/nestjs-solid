import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import './prisma.service';
import { PrismaService } from './prisma.service';

//SRP
import { ProductsModule } from './modules/SRP/products/products.module';
import { OrdersModule } from './modules/SRP/orders/orders.module';
import { LSPOrdersModule } from './modules/LSP/orders/orders.module';
import { PokemonService } from './pokemon/pokemon.service';
import { LoggerMiddleware } from './logger.middleware';
import { LoggerModule } from 'nestjs-pino';
import { CustomProvideModule } from './my-modules/custom-provide/custom-provide.module';

@Module({
  imports: [
    ProductsModule,
    OrdersModule,
    LSPOrdersModule,
    LoggerModule.forRoot({
      pinoHttp: {
        transport: {
          target: 'pino-pretty',
          options: {
            singleLine: true,
          },
        },
      },
    }),
    CustomProvideModule,
  ],
  controllers: [AppController],
  providers: [AppService, PokemonService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
