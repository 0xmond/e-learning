import { InjectModel } from '@nestjs/mongoose';
import { BaseRepo } from '../base.repo';
import { Model } from 'mongoose';
import { Lesson, TLesson } from './lesson.model';

export class LessonRepo extends BaseRepo<TLesson> {
  constructor(
    @InjectModel(Lesson.name) private readonly LessonModel: Model<TLesson>,
  ) {
    super(LessonModel);
  }
}
