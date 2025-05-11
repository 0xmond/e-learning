import { InjectModel } from '@nestjs/mongoose';
import { BaseRepo } from '../base.repo';
import { Model } from 'mongoose';
import { Quiz, TQuiz } from './quiz.model';

export class QuizRepo extends BaseRepo<TQuiz> {
  constructor(
    @InjectModel(Quiz.name) private readonly quizModel: Model<TQuiz>,
  ) {
    super(quizModel);
  }
}
