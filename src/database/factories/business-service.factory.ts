import Faker from 'faker/locale/es';
import { define } from 'typeorm-seeding';
import { BusinessServiceEntity } from '../entities';

define(BusinessServiceEntity, (faker: typeof Faker): BusinessServiceEntity => {
  const entity = new BusinessServiceEntity();
  entity.description = faker.lorem.words(10);
  entity.name = faker.lorem.words(2);
  return entity;
});
