import { Injectable } from '@nestjs/common';
import { CategoryRepo } from '../../db/models/category/category.repo';


@Injectable()
export class CategoryService {
  constructor(private readonly categoryRepo: CategoryRepo) {}

}
