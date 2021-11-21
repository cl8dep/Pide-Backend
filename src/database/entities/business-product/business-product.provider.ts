import { DEFAULT_DATABASE_PROVIDER_NAME } from '~/database';
import { Connection } from 'typeorm';
import BusinessEntity from './business-product.entity';

export const REPOSITORY_NAME = 'BUSINESS_PRODUCT_REPOSITORY';

export const BusinessProductProvider = [
  {
    provide: REPOSITORY_NAME,
    useFactory: (connection: Connection) =>
      connection.getRepository(BusinessEntity),
    inject: [DEFAULT_DATABASE_PROVIDER_NAME],
  },
];
