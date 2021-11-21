import Faker from 'faker/locale/es';
import { define } from 'typeorm-seeding';
import BusinessCategoryEntity from '../entities/business-category/business-category.entity';

define(BusinessCategoryEntity, (faker: typeof Faker): BusinessCategoryEntity => {
  const department = faker.commerce.department();

  const entity = new BusinessCategoryEntity();
  entity.name = department;
  entity.description = faker.random.words(20);
  return entity;
});
