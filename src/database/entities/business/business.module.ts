import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database.module';
import { BusinessProvider } from './business.provider';
import { BusinessService } from './business.service';

@Module({
  imports: [DatabaseModule],
  providers: [...BusinessProvider, BusinessService],
  exports: [BusinessService],
})
export default class BusinessModule {}
