import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private db: PrismaService) { }

  findAll() {
    return this.db.product.findMany();
  }
}
