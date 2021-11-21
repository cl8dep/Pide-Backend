import { Connection } from 'typeorm';
import BusinessServiceEntity from './business-service.entity';

import { DEFAULT_DATABASE_PROVIDER_NAME } from '../../';

export const REPOSITORY_NAME = 'BUSINESS_CATEGORY_REPOSITORY';

export const BusinessServiceProvider = [
  {
    provide: REPOSITORY_NAME,
    useFactory: (connection: Connection) =>
      connection.getRepository(BusinessServiceEntity),
    inject: [DEFAULT_DATABASE_PROVIDER_NAME],
  },
];
