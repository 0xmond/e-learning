import { Body, Controller, Post, Get, Param, Put, Delete ,UseGuards} from '@nestjs/common';
import { CategoryService } from './category.service';
import { Types } from 'mongoose';
import { AuthGuard } from 'src/common/guards/auth.guard';

UseGuards(AuthGuard)
@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post('/create')
  async createCategory(
    @Body() body: {
      name: string;
      description?: string;
    },
  ) {


    return this.categoryService.create(body)
  }

  @Get()
  async getAllCategories() {
    return this.categoryService.find()
  }

  @Get(':id')
  async getCategory(@Param('id') id: string) {
    const categoryId = new Types.ObjectId(id);
    return this.categoryService.findOne(categoryId)
  }

  @Put(':id')
  async updateCategory(
    @Param('id') id: string,
    @Body() body: { name: string; description?: string }
  ) {
    const categoryId = new Types.ObjectId(id)
    return this.categoryService.updateOne(categoryId, body)
  }

  @Delete(':id')
  async deleteCategory(@Param('id') id: string) {
    const categoryId = new Types.ObjectId(id)
    return this.categoryService.deleteOne(categoryId)
  }
}
