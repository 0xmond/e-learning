import { MongooseModule, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { UserRoles } from 'src/common/enum';

export type TUser = User & Document;

export interface IImage {
  secure_url: string;
  public_id: string;
}

interface IOtp {
  code: string;
  otpType: string;
  expiresIn: Date;
}

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ required: true, unique: true, lowercase: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true, enum: UserRoles, default: UserRoles.STUDENT })
  role: string;

  // @Prop({ type: [String], default: [], required: false })
  // skills?: string[];

  // @Prop({ type: [String], default: [], required: false })
  // qualifications?: string[];

  @Prop({ default: '' })
  bio?: string;

  @Prop({ type: { secure_url: String, public_id: String } })
  profilePicture?: IImage;

  @Prop({ default: false })
  isConfirmed: boolean;

  @Prop({
    type: [
      {
        code: { type: String },
        otpType: { type: String },
        expiresIn: { type: Date },
      },
    ],
  })
  otp: IOtp[];
}

export const UserSchema = SchemaFactory.createForClass(User);
export const UserModel = MongooseModule.forFeature([
  { name: User.name, schema: UserSchema },
]);
