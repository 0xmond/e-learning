import { Schema, SchemaFactory, Prop, MongooseModule } from '@nestjs/mongoose';
import { Document, HydratedDocument, SchemaTypes, Types } from 'mongoose';

@Schema({
  timestamps: true,
  versionKey: false,
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
})
export class Category {
  @Prop({ required: true, unique: true })
  name: string;

  @Prop({ type: String })
  description?: string;

  @Prop({ type: SchemaTypes.ObjectId, ref: Category.name, default: null })
  parentCategory: Types.ObjectId;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
export type TCategory = HydratedDocument<Category> & Document;
export const CategoryModel = MongooseModule.forFeature([
  { name: Category.name, schema: CategorySchema },
]);
