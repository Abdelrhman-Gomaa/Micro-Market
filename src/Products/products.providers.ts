import { Product } from './entities/productEntity';

export const ProductsProviders = [
  {
    provide: 'PRODUCTS_REPOSITORY',
    useValue: Product,
  }
];

