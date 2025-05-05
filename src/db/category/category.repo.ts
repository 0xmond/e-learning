import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ProjectionType, QueryOptions, Types } from 'mongoose';
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

  async findAll() {
    return this.categoryModel.find().exec();
  }

  async findById(id: Types.ObjectId) {
    return this.categoryModel.findById(id).exec();
  }

  async update(id: Types.ObjectId, updateData: { name: string; description?: string }) {
    return this.categoryModel.findByIdAndUpdate(id, updateData, { new: true }).exec();
  }

  async remove(id: Types.ObjectId) {
    return this.categoryModel.findByIdAndDelete(id).exec();
  }

  async findByIdAndDelete(id: Types.ObjectId) {
    return this.categoryModel.findByIdAndDelete(id).exec();
  }

  async findByIdAndUpdate(id: Types.ObjectId, updateData: { name: string; description?: string }, arg2: { new: boolean }) {
    return this.categoryModel.findByIdAndUpdate(id, updateData, arg2).exec();
  }

  async findByName(
    name: string,
    projection?: ProjectionType<TCategory>,
    options?: QueryOptions,
  ) {
    return this.categoryModel.findOne({ name }, projection, options).exec();
  }

  async findByParentId(
    projection?: ProjectionType<TCategory>,
    options?: QueryOptions,
  ) {
    return this.categoryModel.find({ parentId: { $exists: true } }, projection, options).exec();
  }
}
