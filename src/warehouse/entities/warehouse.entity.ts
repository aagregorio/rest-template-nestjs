import { Address } from 'src/interfaces';
import { Item } from 'src/item';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

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
