import { Injectable } from '@nestjs/common';
import { CategoryRepo } from '../../db/category/category.repo';


@Injectable()
export class CategoryService {
  constructor(private readonly categoryRepo: CategoryRepo) {}

}
