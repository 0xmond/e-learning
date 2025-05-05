import { MongooseModule, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { UserRoles } from 'src/common/utils/enum';

export type TUser = User & Document;

export interface IImage {
  secure_url: string;
  public_id: string;
}

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true })
  fullName: string;

  @Prop({ required: true, unique: true, lowercase: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true, enum: UserRoles, default: UserRoles.STUDENT })
  role: string;

  @Prop({ type: [String], default: [], required: false })
  skills?: string[];

  @Prop({ type: [String], default: [], required: false })
  qualifications?: string[];

  @Prop({ default: '' })
  bio?: string;

  @Prop({ type: { secure_url: String, public_id: String } })
  profilePicture?: IImage;

  @Prop({ default: false })
  isConfirmed: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);
export const UserModel = MongooseModule.forFeature([
  { name: User.name, schema: UserSchema },
]);
