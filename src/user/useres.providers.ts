import { User } from './entity/userEntity';

export const UserProviders = [
  {
    provide: 'USER_REPOSITORY',
    useValue: User,
  }
];
