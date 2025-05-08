import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common'
import { LessonService } from './lesson.service';
import { CreateLessonDto, UpdateLessonDto } from './dto';
import { Types } from 'mongoose';

@Controller('lesson')
export class LessonController {
    constructor(private readonly lessonService: LessonService) { }

    @Post()
    async create(@Body() dto: CreateLessonDto) {
        const lesson = await this.lessonService.create(dto);
        return {
            message: 'Lesson created successfully',
            statusCode: 201,
            data: lesson,
        };
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        const lesson = await this.lessonService.findOne(new Types.ObjectId(id));
        return {
            message: 'Lesson fetched successfully',
            statusCode: 200,
            data: lesson,
        };
    }

    @Get()
    async findAll() {
        const lessons = await this.lessonService.findAll();
        return {
            message: 'Lessons fetched successfully',
            statusCode: 200,
            data: lessons,
        };
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() dto: UpdateLessonDto) {
        const updated = await this.lessonService.update(
            new Types.ObjectId(id),
            dto,
        );
        return {
            message: 'Lesson updated successfully',
            statusCode: 200,
            data: updated,
        };
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        await this.lessonService.delete(new Types.ObjectId(id));
        return {
            message: 'Lesson deleted successfully',
            statusCode: 200,
        };
    }
}