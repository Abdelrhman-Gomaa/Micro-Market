import { Busket } from './entities/busketEntity';

export const BusketProviders = [
  {
    provide: 'BUSKET_REPOSITORY',
    useValue: Busket,
  }
];
