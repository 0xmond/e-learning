import { MongooseModule, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument, Types } from 'mongoose';
import { Lesson } from '../lesson/lesson.model';  

@Schema({
  timestamps: true,
  versionKey: false,
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
})
export class Quiz {
  @Prop({ type: Types.ObjectId, ref: Lesson.name, required: true })
  lessonId: Types.ObjectId;  
  
  @Prop({ required: true, trim: true })
  title: string;  
  
  @Prop({ required: true, trim: true })
  description: string; 
  
  @Prop({ required: true })
  timeLimit: number; 
  
  @Prop({ required: true })
  totalMarks: number; 
  
  @Prop({ required: true })
  passingScore: number;  
}

export const quizSchema = SchemaFactory.createForClass(Quiz);

export type TQuiz = HydratedDocument<Quiz> & Document;

export const QuizModel = MongooseModule.forFeature([
  { name: Quiz.name, schema: quizSchema },
]);
