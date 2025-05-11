import { IsMongoId, IsNumber, IsOptional, IsString } from "class-validator";
import { Types } from "mongoose";

export class CreateQuizDto {
  @IsMongoId()
  lessonId: Types.ObjectId;

  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsNumber()
  timeLimit: number;

  @IsNumber()
  totalMarks: number;

  @IsNumber()
  passingScore: number;
}

export class UpdateQuizDto {
  @IsOptional()
  @IsMongoId()
  lessonId?: Types.ObjectId;

  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsNumber()
  timeLimit?: number;

  @IsOptional()
  @IsNumber()
  totalMarks?: number;

  @IsOptional()
  @IsNumber()
  passingScore?: number;
}

