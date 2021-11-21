import { createConnection, getConnection, getConnectionOptions } from 'typeorm';
import { isDevelopment } from '~/services/ConfigService';

export const DEFAULT_DATABASE_PROVIDER_NAME = 'DEFAULT_DATABASE_CONNECTION';

export const databaseProviders = [
  {
    provide: DEFAULT_DATABASE_PROVIDER_NAME,
    useFactory: async () => {
      return await createConnection({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'root',
        database: 'pide',
        entities: [__dirname + '/entities/**/*.entity{.ts,.js}'],
        synchronize: isDevelopment(),
      });
    },
  },
];
