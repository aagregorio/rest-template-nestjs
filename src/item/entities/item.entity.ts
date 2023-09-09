import { Vendor } from 'src/vendor';
import { Warehouse } from 'src/warehouse';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

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
