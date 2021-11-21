import { DEFAULT_DATABASE_PROVIDER_NAME } from '~/database';
import { Connection } from 'typeorm';
import BusinessEntity from './business.entity';

export const REPOSITORY_NAME = 'ACCOUNTS_REPOSITORY';

export const BusinessProvider = [
  {
    provide: REPOSITORY_NAME,
    useFactory: (connection: Connection) =>
      connection.getRepository(BusinessEntity),
    inject: [DEFAULT_DATABASE_PROVIDER_NAME],
  },
];
