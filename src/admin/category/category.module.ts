import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Category, CategorySchema } from '../../db/models/category/category.model';
import { CategoryRepo } from '../../db/models/category/category.repo';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Category.name, schema: CategorySchema }]),
  ],
  providers: [CategoryRepo, CategoryService],
  controllers: [CategoryController],
})
export class CategoryModule {}
