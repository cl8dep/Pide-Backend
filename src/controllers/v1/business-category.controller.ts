import {
  Controller,
  DefaultValuePipe,
  Get,
  Param,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import {
  BusinessCategoryService,
  BusinessCategoryEntity,
} from '~/database/entities/business-category';
import { Pagination } from '~/types/pagination';


@Controller('api/v1/business-category')
export class BusinessCategoryController {
  businessCategoryService: BusinessCategoryService;

  constructor(businessCategoryService: BusinessCategoryService) {
    this.businessCategoryService = businessCategoryService;
  }

  @Get()
  async getAll(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number = 10,
  ): Promise<Pagination<BusinessCategoryEntity>> {
    return await this.businessCategoryService.paginate({
      page,
      limit,
      route: "http://localhost:3000/api/v1/business-category"
    });
  }
}
