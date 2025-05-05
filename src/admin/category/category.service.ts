import { Injectable } from '@nestjs/common';
import { CategoryRepo } from '../../db/models/category/category.repo';
import { TCategory } from '../../db/models/category/category.model';

interface ICreateCategory {
  name: string;
  description?: string;
}

@Injectable()
export class CategoryService {
  constructor(private readonly categoryRepo: CategoryRepo) {}

}
