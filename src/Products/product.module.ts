import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { UserModule } from 'src/user/user.module';
import { CategoryProviders } from './categories.providers';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { ProductsProviders } from './products.providers';

@Module({
    imports: [
        DatabaseModule,
        UserModule
    ],
    controllers: [ProductController],
    providers: [
        ProductService,
        ...ProductsProviders,
        ...CategoryProviders
    ],
})
export class ProductModule {}
