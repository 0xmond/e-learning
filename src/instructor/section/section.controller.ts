import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { SectionService } from './section.service';
import { createSectionDto, updateSectionDto } from './dto';
import { Types } from 'mongoose';

@Controller('/section')
export class SectionController {
  constructor(private readonly sectionService: SectionService) {}

  @Post()
  async create(@Body() dto: createSectionDto) {
    const section = await this.sectionService.create(dto);
    return {
      message: 'Section created successfully',
      statusCode: 201,
      data: section,
    };
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const section = await this.sectionService.findOne(new Types.ObjectId(id));
    return {
      message: 'Section fetched successfully',
      statusCode: 200,
      data: section,
    };
  }

  @Get()
  async findAll() {
    const sections = await this.sectionService.findAll();
    return {
      message: 'Sections fetched successfully',
      statusCode: 200,
      data: sections,
    };
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() dto: updateSectionDto) {
    const updated = await this.sectionService.update(
      new Types.ObjectId(id),
      dto,
    );
    return {
      message: 'Section updated successfully',
      statusCode: 200,
      data: updated,
    };
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    await this.sectionService.delete(new Types.ObjectId(id));
    return {
      message: 'Section deleted successfully',
      statusCode: 200,
    };
  }
}
