import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ProjectionType, QueryOptions } from 'mongoose';
import { BaseRepo } from 'src/db/base.repo';
import { Category, TCategory } from './category.model';

@Injectable()
export class CategoryRepo extends BaseRepo<TCategory> {
  constructor(
    @InjectModel(Category.name)
    private readonly categoryModel: Model<TCategory>,
  ) {
    super(categoryModel);
  }

  findByName(
    name: string,
    projection?: ProjectionType<TCategory>,
    options?: QueryOptions,
  ) {
    return this.findOne({ filter: { name }, projection, options });
  }

  findByParentId(
    projection?: ProjectionType<TCategory>,
    options?: QueryOptions,
  ) {
    return this.find({
      projection,
      options,
    });
  }
}
