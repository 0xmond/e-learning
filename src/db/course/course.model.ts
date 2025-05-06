import { MongooseModule, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { CourseLevels } from 'src/common/enum';
import { IImage, User } from '../user/user.model';
import { Category } from '../category/category.model';

@Schema({
  timestamps: true,
  versionKey: false,
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
})
export class Course {
  @Prop({ required: true, trim: true })
  title: string;

  @Prop({ required: true, trim: true })
  description: string;

  @Prop({
    type: {
      secure_url: String,
      public_id: String,
    },
    required: true,
  })
  thumbnailUrl: IImage;

  @Prop({ type: Types.ObjectId, ref: User.name, required: true })
  instructor: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: Category.name, required: true })
  category: Types.ObjectId;

  @Prop({
    type: String,
    enum: CourseLevels,
    required: true,
  })
  level: string;

  @Prop({ required: true })
  language: string;

  @Prop({ required: true, min: 0 })
  price: number;

  @Prop({ type: Number, min: 0, max: 5, default: 0 })
  rating: number;

  @Prop({ default: false })
  isPublished: boolean;
}

export const courseSchema = SchemaFactory.createForClass(Course);

export type TCourse = Course & Document;

export const CourseModel = MongooseModule.forFeature([
  { name: Course.name, schema: courseSchema },
]);
