import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { CompletedLessonRepo } from "src/db/completedLesson/completedLesson.repo";
import { CompletedLessonDto } from "./dto";
import { Types } from "mongoose";


@Injectable()
export class CompletedLessonService{
    constructor(private readonly CompletedLessonRepo: CompletedLessonRepo){}

    async create(dto: CompletedLessonDto) {
        try {
          const completedLessonData = {
            userId: new Types.ObjectId(dto.userId),
            lessonId: new Types.ObjectId(dto.lessonId),
            completedAt: new Date(),
          };
    
          return await this.CompletedLessonRepo.create(completedLessonData);
        } catch (error) {
          throw new InternalServerErrorException(
            'Failed to complete the lesson: ' + error.message,
          );
        }
      }

      async find(userId: string) {
        return this.CompletedLessonRepo.find({
          filter: {
            userId: new Types.ObjectId(userId),
          },
          populate: [
            {
              path: 'lessonId',
              populate: {
                path: 'sectionId',
                populate: {
                  path: 'courseId',
                },
              },
            },
          ],
        });
      }
      
      
}
