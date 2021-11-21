import { DEFAULT_DATABASE_PROVIDER_NAME } from '~/database';
import { Connection } from 'typeorm';
import BusinessCategoryEntity from './business-category.entity';

export const REPOSITORY_NAME = 'BUSINESS_CATEGORY_REPOSITORY';

export const BusinessCategoryProvider = [
  {
    provide: REPOSITORY_NAME,
    useFactory: (connection: Connection) =>
      connection.getRepository(BusinessCategoryEntity),
    inject: [DEFAULT_DATABASE_PROVIDER_NAME],
  },
];
