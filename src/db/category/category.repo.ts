import { InjectModel } from '@nestjs/mongoose';
import { BaseRepo } from '../base.repo';
import { Category, TCategory } from './category.model';
import { Model } from 'mongoose';

export class CategoryRepo extends BaseRepo<TCategory> {
  constructor(
    @InjectModel(Category.name) private readonly categoryModel: Model<TCategory>,
  ) {
    super(categoryModel);
  }
}
