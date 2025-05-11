import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { QuizService } from "./quiz.service";
import { CreateQuizDto, UpdateQuizDto } from "./dto";

@Controller('quiz')
export class QuizController {
    constructor(private readonly quizService: QuizService){}

    @Post()
    async create(@Body() dto: CreateQuizDto) {
      const quiz = await this.quizService.create(dto);
      return {
        message: 'Quiz created successfully',
        statusCode: 201,
        data: quiz,
      };
    }

    @Get()
    async findAll() {
      const quizzes = await this.quizService.findAll();
      return {
        message: 'Quizzes fetched successfully',
        statusCode: 200,
        data: quizzes,
      };
    }
  
    @Get(':id')
    async findOne(@Param('id') id: string) {
      const quiz = await this.quizService.findOne(id);
      return {
        message: 'Quiz fetched successfully',
        statusCode: 200,
        data: quiz,
      };
    }
  
    @Put(':id')
    async update(@Param('id') id: string, @Body() dto: UpdateQuizDto) {
      const updatedQuiz = await this.quizService.update(id, dto);
      return {
        message: 'Quiz updated successfully',
        statusCode: 200,
        data: updatedQuiz,
      };
    }
    
  
    @Delete(':id')
    async remove(@Param('id') id: string) {
      await this.quizService.delete(id);
      return {
        message: 'Quiz deleted successfully',
        statusCode: 200,
      };
    }
}