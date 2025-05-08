import { MongooseModule, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument, SchemaTypes, Types } from 'mongoose';
import { Section } from '../section/section.model';
import { LessonType } from 'src/common/enum';



@Schema({
  timestamps: true,
  versionKey: false,
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
})
export class Lesson {
  @Prop({ type: SchemaTypes.ObjectId, ref: Section.name, required: true })
  sectionId: Types.ObjectId;

  @Prop({ required: true, trim: true })
  title: string;

  @Prop({
    type: String,
    enum: LessonType,
    required: true,
  })
  type: string;

  @Prop({ trim: true })
  videoUrl?: string;

  @Prop()
  content?: string;

  @Prop({ min: 0 })
  duration?: number;

  @Prop({ required: true })
  order: number;
    static schema: any;
    static lessonSchema: any;
}

export const lessonSchema = SchemaFactory.createForClass(Lesson);

export type TLesson = HydratedDocument<Lesson> & Document;

export const LessonModel = MongooseModule.forFeature([
  { name: Lesson.name, schema: lessonSchema },
]);
