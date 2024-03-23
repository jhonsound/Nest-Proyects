import { USER_REPOSITORY } from 'src/core/constant';
import { User } from '../../models/User.model';

export const usersProviders = [
  {
    provide: USER_REPOSITORY,
    useValue: User,
  },
];
