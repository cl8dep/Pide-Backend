import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity("business-service")
class BusinessServiceEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;
}

export default BusinessServiceEntity;
