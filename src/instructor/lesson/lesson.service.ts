import { Injectable, InternalServerErrorException, NotFoundException } from "@nestjs/common";
import { LessonRepo } from "src/db/lesson/lesson.repo";
import { CreateLessonDto, UpdateLessonDto } from "./dto";
import { Types } from "mongoose";


@Injectable()
export class LessonService{
    constructor(private readonly LessonRepo:LessonRepo){}

    async create(dto: CreateLessonDto) {
        try {
          const lessonData = {
            ...dto,
            sectionId: new Types.ObjectId(dto.sectionId),
          };
          return await this.LessonRepo.create(lessonData);
        } catch (error) {
          throw new InternalServerErrorException(
            'Failed to create lesson: ' + error.message,
          );
        }
      }


      async findAll() {
        try {
          return await this.LessonRepo.find({});
        } catch (error) {
          throw new InternalServerErrorException(
            'Failed to fetch lesson: ' + error.message,
          );
        }
      }
    
      async findOne(id: Types.ObjectId) {
        try {
          const lesson = await this.LessonRepo.findOne({ filter: { _id: id } });
          if (!lesson) throw new NotFoundException('lesson not found');
          return lesson;
        } catch (error) {
          if (error instanceof NotFoundException) throw error;
          throw new InternalServerErrorException(
            'Failed to fetch lesson: ' + error.message,
          );
        }
      }

      async update(id: Types.ObjectId, dto: UpdateLessonDto) {
        try {
            const updatedLesson = await this.LessonRepo.updateOne({
                filter: { _id: id },
                update: { ...dto },
                options: { new: true },
              });
         
          
    
          if (!updatedLesson) {
            throw new NotFoundException('Lesson not found or could not be updated');
          }
    
          return updatedLesson;
        } catch (error) {
          if (error instanceof NotFoundException) throw error;
          throw new InternalServerErrorException(
            'Failed to update lesson: ' + error.message
          );
        }
      }
    
      async delete(id: Types.ObjectId) {
        try {
          const result = await this.LessonRepo.deleteOne({ _id: id });
    
          if (result.deletedCount === 0) {
            throw new NotFoundException('Lesson not found or could not be deleted');
          }
    
          return { message: 'Lesson deleted successfully' };
        } catch (error) {
          if (error instanceof NotFoundException) throw error;
          throw new InternalServerErrorException(
            'Failed to delete lesson: ' + error.message
          );
        }
      }
}