import { MongooseModule, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument, SchemaTypes, Types } from 'mongoose';
import { User } from '../user/user.model';
import { Lesson } from '../lesson/lesson.model';

@Schema({
  timestamps: true,
  versionKey: false,
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
})
export class CompletedLesson {
  @Prop({ type: SchemaTypes.ObjectId, ref: User.name, required: true })
  userId: Types.ObjectId;

  @Prop({ type: SchemaTypes.ObjectId, ref: Lesson.name, required: true })
  lessonId: Types.ObjectId;

  @Prop({ type: Date })
  completedAt: Date;
}

export const completedLessonSchema = SchemaFactory.createForClass(CompletedLesson);

export type TCompletedLesson = HydratedDocument<CompletedLesson> & Document;

export const CompletedLessonModel = MongooseModule.forFeature([
  { name: CompletedLesson.name, schema: completedLessonSchema },
]);
