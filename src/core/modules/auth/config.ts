import * as dotenv from 'dotenv';
import { User } from '../../models/User.model';
import { Roles } from '../../models/Roles.model';

dotenv.config();

export const configLoader = () => {
  return {
    port: process.env.PORT,
    database: {
      username: process.env.USERNAME_DATA_BASE,
      password: process.env.PASSWORD_DATA_BASE,
      database: process.env.DATA_BASE,
      host: process.env.HOST_DATA_BASE,
      port: process.env.PORT_DATA_BASE,
      dialect: process.env.DIALECT_DATA_BASE,
      models: [User, Roles],
    },
  };
};
