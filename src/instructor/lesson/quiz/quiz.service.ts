import {
  Injectable,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { QuizRepo } from 'src/db/quiz/quiz.repo';
import { CreateQuizDto, UpdateQuizDto } from './dto';

@Injectable()
export class QuizService {
  constructor(private readonly quizRepo: QuizRepo) {}

  async create(dto: CreateQuizDto) {
    try {
      const quizData = await this.quizRepo.create(dto);
      return quizData;
    } catch (error) {
      throw new InternalServerErrorException('Failed to create quiz');
    }
  }

  async findAll(filter?: any, limit: number = 10, skip: number = 0) {
    try {
      return await this.quizRepo.find({
        filter,
        limit,
        skip,
      });
    } catch (error) {
      throw new InternalServerErrorException('Failed to fetch quizzes');
    }
  }

  async findOne(id: string) {
    try {
      const quiz = await this.quizRepo.findOne({
        filter: { _id: id },
      });

      if (!quiz) {
        throw new NotFoundException(`Quiz with ID ${id} not found`);
      }

      return quiz;
    } catch (error) {
      throw new InternalServerErrorException('Failed to fetch quiz');
    }
  }

  async update(id: string, dto: UpdateQuizDto) {
    try {
      const cleanDto = Object.fromEntries(
        Object.entries(dto).filter(([_, v]) => v !== undefined)
      );

      const updatedQuiz = await this.quizRepo.updateOne({
        filter: { _id: id },
        update: cleanDto,
      });

      if (!updatedQuiz) {
        throw new NotFoundException(`Quiz with ID ${id} not found`);
      }

      return updatedQuiz;
    } catch (error) {
      throw new InternalServerErrorException('Failed to update quiz');
    }
  }

  async delete(id: string) {
    try {
      const deleted = await this.quizRepo.deleteOne({ _id: id });

      if (!deleted?.deletedCount) {
        throw new NotFoundException(`Quiz with ID ${id} not found`);
      }

      return {
        message: `Quiz with ID ${id} deleted successfully`,
      };
    } catch (error) {
      throw new InternalServerErrorException('Failed to delete quiz');
    }
  }
}
