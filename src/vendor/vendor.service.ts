import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Vendor } from 'src/database/entities';
import { CreateVendorDto, UpdateVendorDto } from 'src/dtos';
import { VendorMapper } from 'src/mappers';
import { Repository } from 'typeorm';

@Injectable()
export class VendorService {
  constructor(
    @InjectRepository(Vendor)
    private readonly vendorRepository: Repository<Vendor>,
    private readonly vendorMapper: VendorMapper,
  ) {}

  async getVendors(): Promise<Vendor[]> {
    return await this.vendorRepository.find();
  }

  async createVendor(createVendor: CreateVendorDto): Promise<Vendor> {
    const entity = this.vendorMapper.fromCreateToDomain(createVendor);
    return await this.vendorRepository.save(entity);
  }

  async updateVendor(id: string, update: CreateVendorDto): Promise<Vendor> {
    const entity = this.vendorMapper.fromCreateToDomain(update, id);
    return await this.vendorRepository.save(entity);
  }

  async editVendor(id: string, update: UpdateVendorDto): Promise<Vendor> {
    const actual = await this.checkIfVendorExist(id);
    const newEntity = await this.vendorMapper.fromUpdateToDomain(
      actual,
      update,
    );
    return this.vendorRepository.save(newEntity);
  }

  async deleteVendor(id: string): Promise<void> {
    const vendor = await this.checkIfVendorExist(id);
    await this.vendorRepository.softDelete(vendor);
  }

  // TODO Maybe could be move to a custom Repository
  async checkIfVendorExist(id: string): Promise<Vendor> {
    if (!id) throw new BadRequestException();
    return await this.vendorRepository.findOneOrFail({ where: { id } });
  }
}
