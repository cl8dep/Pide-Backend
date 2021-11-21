import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

import DatabaseModule from './database';
import DatabaseEntities from './database/entities';
import { ControllersV1 } from './controllers';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
      serveStaticOptions: {
        maxAge: 100000,
      },
    }),
    DatabaseModule,
    ...DatabaseEntities,
  ],
  controllers: [...ControllersV1],
  providers: [],
})
export class AppModule {}
