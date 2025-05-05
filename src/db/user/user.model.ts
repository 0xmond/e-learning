import { MongooseModule, Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type TUser = User & Document

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true })
  fullName: string

  @Prop({ required: true, unique: true, lowercase: true })
  email: string

  @Prop({ required: true })
  password: string

  @Prop({ required: true, enum: ['student', 'instructor', 'admin'], default: 'student' })
  role: 'student' | 'instructor' | 'admin'

  @Prop({ type: [String], default: [], required: false })
  skills?: string[]

  @Prop({ type: [String], default: [], required: false })
  qualifications?: string[]

  @Prop({ default: '' })
  bio?: string

  @Prop({ default: '' })
  profilePicture?: string

  @Prop({ default: false })
  isConfirmed: boolean
}

export const UserSchema = SchemaFactory.createForClass(User)
export const UserModel = MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])


