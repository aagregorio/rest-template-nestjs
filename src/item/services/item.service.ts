import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateItemDto, UpdateItemDto } from 'src/dtos';
import { Repository } from 'typeorm';
import { ItemMapper } from '../mappers';
import { Item } from '../entities';

@Injectable()
export class ItemService {
  constructor(
    @InjectRepository(Item) private readonly itemRepository: Repository<Item>,
    private readonly itemMapper: ItemMapper,
  ) {}

  async getItems(): Promise<Item[]> {
    return await this.itemRepository.find();
  }

  async createItem(createItem: CreateItemDto): Promise<Item> {
    const entity = this.itemMapper.fromCreateToDomain(createItem);
    return await this.itemRepository.save(entity);
  }

  async updateItem(id: string, update: CreateItemDto): Promise<Item> {
    const entity = this.itemMapper.fromCreateToDomain(update, id);
    return await this.itemRepository.save(entity);
  }

  async editItem(id: string, update: UpdateItemDto): Promise<Item> {
    const actual = await this.checkIfItemExist(id);
    const newEntity = await this.itemMapper.fromUpdateToDomain(actual, update);
    return this.itemRepository.save(newEntity);
  }

  async deleteItem(id: string): Promise<void> {
    const item = await this.checkIfItemExist(id);
    await this.itemRepository.softDelete(item);
  }

  // TODO Maybe could be move to a custom Repository
  async checkIfItemExist(id: string): Promise<Item> {
    if (!id) throw new BadRequestException();
    return await this.itemRepository.findOneOrFail({ where: { id } });
  }
}
