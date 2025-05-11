import { InjectModel } from '@nestjs/mongoose';
import { BaseRepo } from '../base.repo';
import { CompletedLesson, TCompletedLesson } from './completedLesson.model';
import { Model } from 'mongoose';

export class CompletedLessonRepo extends BaseRepo<TCompletedLesson> {
  constructor(
    @InjectModel(CompletedLesson.name) private readonly completedLesson: Model<TCompletedLesson>,
  ) {
    super(completedLesson);
  }
}
