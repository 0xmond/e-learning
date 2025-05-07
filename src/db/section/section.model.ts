import { MongooseModule, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Course } from '../course/course.model';

@Schema({
  timestamps: true,
  versionKey: false,
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
})
export class Section {
  @Prop({ type: Types.ObjectId, ref: Course.name, required: true })
  courseId: Types.ObjectId;

  @Prop({ required: true, trim: true })
  title: string;

  @Prop({ required: true })
  order: number;

  @Prop({ trim: true })
  description: string;
}

export const sectionSchema = SchemaFactory.createForClass(Section);

export type TSection = Section & Document;

export const SectionModel = MongooseModule.forFeature([
  { name: Section.name, schema: sectionSchema },
]);
