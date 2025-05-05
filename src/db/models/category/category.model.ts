import { Schema, SchemaFactory, Prop, MongooseModule } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type TCategory = Category & Document;

@Schema({ timestamps: true })
export class Category {
  @Prop({ required: true , unique: true })
  name: string;

  @Prop({ default: null})
  description?: string;


}

export const CategorySchema = SchemaFactory.createForClass(Category);
export const CategoryModel = MongooseModule.forFeature([
  { name: Category.name, schema: CategorySchema },
]);