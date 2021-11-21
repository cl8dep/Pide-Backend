import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database.module';
import { BusinessServiceProvider  } from './business-service.provider';
import { BusinessServiceService } from './business-service.service';

@Module({
  imports: [DatabaseModule],
  providers: [...BusinessServiceProvider, BusinessServiceService],
  exports: [BusinessServiceService],
})
export default class BusinessServiceModule {}
