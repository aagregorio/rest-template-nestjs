import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Vendor, Warehouse } from '../entities';

Entity();
export class Item {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar' })
  name: string;

  @ManyToMany(() => Vendor, (v) => v.items)
  vendors: Vendor[];

  @ManyToMany(() => Warehouse, (w) => w.items)
  warehouses: Warehouse[];
}
