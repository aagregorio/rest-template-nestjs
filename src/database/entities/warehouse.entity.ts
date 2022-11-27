import { Address } from 'src/interfaces';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Item } from '../entities';

@Entity()
export class Warehouse {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'jsonb' })
  address: Address;

  @ManyToMany(() => Item, (i) => i.warehouses)
  items: Item[];
}
