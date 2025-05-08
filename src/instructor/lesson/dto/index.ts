import { IsEnum, IsMongoId, IsNotEmpty, IsNumber, IsOptional, IsString, Min } from 'class-validator';
import { LessonType } from '../../../common/enum';
import { Types } from 'mongoose';

export class CreateLessonDto {
  @IsMongoId()
  @IsNotEmpty()
  sectionId: Types.ObjectId;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsEnum(LessonType)
  type: LessonType;

  @IsOptional()
  @IsString()
  videoUrl?: string;

  @IsOptional()
  @IsString()
  content?: string;

  @IsOptional()
  @IsNumber()
  @Min(0)
  duration?: number;

  @IsNumber()
  @Min(0)
  order: number;
}

export class UpdateLessonDto {
    @IsOptional()
    @IsMongoId()
    sectionId?: Types.ObjectId;
  
    @IsOptional()
    @IsString()
    title?: string;
  
    @IsOptional()
    @IsEnum(LessonType)
    type?: LessonType;
  
    @IsOptional()
    @IsString()
    videoUrl?: string;
  
    @IsOptional()
    @IsString()
    content?: string;
  
    @IsOptional()
    @IsNumber()
    @Min(0)
    duration?: number;
  
    @IsOptional()
    @IsNumber()
    @Min(0)
    order?: number;
  }