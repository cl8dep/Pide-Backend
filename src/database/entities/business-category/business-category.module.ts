import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database.module';
import { BusinessCategoryProvider } from './business-category.provider';
import { BusinessCategoryService } from './business-category.service';

@Module({
  imports: [DatabaseModule],
  providers: [...BusinessCategoryProvider, BusinessCategoryService],
  exports: [BusinessCategoryService],
})
export default class BusinessCategoryModule {}
