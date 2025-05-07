import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Category, CategorySchema } from '../../db/category/category.model';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { CategoryRepo } from 'src/db/category/category.repo';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Category.name, schema: CategorySchema }]),
  ],
  providers: [ CategoryRepo,CategoryService],
  controllers: [CategoryController],
})
export class CategoryModule {}
