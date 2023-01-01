import { Category } from './entities/categoriesEntity';

export const CategoryProviders = [
  {
    provide: 'CATEGORIES_REPOSITORY',
    useValue: Category,
  }
];
