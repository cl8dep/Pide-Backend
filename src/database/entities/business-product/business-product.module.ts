import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database.module';
import { BusinessProductProvider } from './business-product.provider';
import { BusinessProductService } from './business-product.service';

@Module({
  imports: [DatabaseModule],
  providers: [...BusinessProductProvider, BusinessProductService],
  exports: [BusinessProductService],
})
export default class BusinessProductModule {}
