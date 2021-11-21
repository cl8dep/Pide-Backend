import {
  Controller,
  DefaultValuePipe,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { BusinessProductEntity, BusinessProductService } from '~/database';
import { BusinessService } from '~/database/entities/business/business.service';
import { getHost } from '~/services/ConfigService';
import { Pagination } from '~/types/pagination';
import { TextResources } from '~/assets';

@Controller('api/v1/business-product')
export class BusinessProductController {
  businessCategoryService: BusinessProductService;
  businessService: BusinessService;

  constructor(
    businessCategoryService: BusinessProductService,
    businessService: BusinessService,
  ) {
    this.businessCategoryService = businessCategoryService;
    this.businessService = businessService;
  }

  @Get(':businessSlug')
  async getAll(
    @Param('businessSlug') businessSlug: string,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number = 10,
  ): Promise<Pagination<BusinessProductEntity>> {
    const business = await this.businessService.exist(businessSlug);

    if (!business)
      throw new NotFoundException(business, TextResources.BUSINESS_NOT_FOUNDED);
    const products = await this.businessCategoryService.paginate(
      {
        page,
        limit,
        route: `${getHost()}/api/v1/business-product`,
      },
      businessSlug,
    );
    products.items.map((product) => {
      delete product.business;
      return product;
    });

    return products;
  }
}
