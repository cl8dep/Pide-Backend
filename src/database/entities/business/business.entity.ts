import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import BusinessCategoryEntity from '../business-category/business-category.entity';
import { BusinessProductEntity } from '../business-product';
import { BusinessServiceEntity } from '../business-service';

@Entity('business')
class BusinessEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  slug: string;

  @Column()
  description: string;

  @ManyToOne(() => BusinessCategoryEntity)
  @JoinColumn()
  category: BusinessCategoryEntity;

  @Column()
  logo?: string;

  @Column()
  paymentInstructions: string;

  @Column()
  address: string;

  @Column()
  whatsAppNumber: string;

  @Column()
  telegramNumber: string;

  @Column()
  minDeliveryCost: string;

  @Column()
  minDeliveryCostForFree: string;

  @Column()
  deliveryCost: string;

  @ManyToMany(() => BusinessServiceEntity)
  @JoinTable()
  ServicesEnabled: BusinessServiceEntity;

  @OneToMany(() => BusinessProductEntity, (x) => x.business)
  @JoinTable()
  products: BusinessProductEntity[];
}

export default BusinessEntity;
