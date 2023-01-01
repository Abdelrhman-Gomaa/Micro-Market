import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { UserModule } from 'src/user/user.module';
import { BusketController } from './busket.controller';
import { BusketProviders } from './busket.providers';
import { BusketService } from './busket.service';

@Module({
  imports: [
    DatabaseModule,
    UserModule
  ],
  controllers: [BusketController],
  providers: [
    BusketService,
    ...BusketProviders
  ]
})
export class BusketModule {}
