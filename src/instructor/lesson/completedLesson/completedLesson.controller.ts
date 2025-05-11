import { Body, Controller, Get, Param, Post, UseGuards } from "@nestjs/common";
import { AuthGuard } from "src/common/guards/auth.guard";
import { CompletedLessonService } from "./completedLesson.service";
import { CompletedLessonDto } from "./dto";
import { Types } from "mongoose";

@Controller('completed-lesson')
@UseGuards(AuthGuard)
export class CompletedLessonController {

    constructor(private readonly completedLessonService: CompletedLessonService) { }


    @Post()
    async create(@Body() dto: CompletedLessonDto) {
        const completedLesson = await this.completedLessonService.create(dto);
        return {
            message: 'Lesson completed successfully',
            statusCode: 201,
            data: completedLesson,
        };
    }

    @Get('user/:userId')
    async findByUser(@Param('userId') userId: string) {
      return this.completedLessonService.find(userId);
    }
    
}

