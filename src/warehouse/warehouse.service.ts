import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Warehouse } from 'src/database/entities';
import { CreateWarehouseDto, UpdateWarehouseDto } from 'src/dtos';
import { WarehouseMapper } from 'src/mappers';
import { Repository } from 'typeorm';

@Injectable()
export class WarehouseService {
  constructor(
    @InjectRepository(Warehouse)
    private readonly warehouseRepository: Repository<Warehouse>,
    private readonly warehouseMapper: WarehouseMapper,
  ) {}

  async getWarehouses(): Promise<Warehouse[]> {
    return await this.warehouseRepository.find();
  }

  async createWarehouse(
    createWarehouse: CreateWarehouseDto,
  ): Promise<Warehouse> {
    const entity = this.warehouseMapper.fromCreateToDomain(createWarehouse);
    return await this.warehouseRepository.save(entity);
  }

  async updateWarehouse(id: string, update: CreateWarehouseDto) {
    const entity = this.warehouseMapper.fromCreateToDomain(update, id);
    return await this.warehouseRepository.save(entity);
  }

  async editWarehouse(id: string, update: UpdateWarehouseDto) {
    const actual = await this.checkIfWarehouseExist(id);
    const newEntity = await this.warehouseMapper.fromUpdateToDomain(
      actual,
      update,
    );
    return this.warehouseRepository.save(newEntity);
  }

  async deleteWarehouse(id: string): Promise<void> {
    const warehouse = await this.checkIfWarehouseExist(id);
    await this.warehouseRepository.softDelete(warehouse);
  }

  // TODO Maybe could be move to a custom Repository
  async checkIfWarehouseExist(id: string): Promise<Warehouse> {
    if (!id) throw new BadRequestException();
    return await this.warehouseRepository.findOneOrFail({ where: { id } });
  }
}
