import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './Products/product.module';
import { DatabaseModule } from './database/database.module';
import { BusketModule } from './busket/busket.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    ProductModule, 
    DatabaseModule, 
    BusketModule, 
    UserModule],
  controllers: [AppController],
  providers: [
    AppService,
  ],
})
export class AppModule {}
