import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsEnum,
  IsMongoId,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { Types } from 'mongoose';
import { CourseLevels } from 'src/common/enum';

interface IImage {
  public_id: string;
  secure_url: string;
  folderId: string;
}

export class CreateCourseDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsObject()
  @IsOptional()
  image: IImage;

  @Type(() => Types.ObjectId)
  @IsMongoId()
  instructor: string;

  @Type(() => Types.ObjectId)
  @IsMongoId()
  category: Types.ObjectId;

  @IsEnum(CourseLevels)
  level: CourseLevels;

  @IsString()
  @IsNotEmpty()
  language: string;

  @IsNumber()
  @Min(0)
  price: number;

  @IsBoolean()
  isPublished?: boolean;
}

export class UpdateCourseDto {
  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsEnum(CourseLevels)
  @IsOptional()
  level?: CourseLevels;

  @IsString()
  @IsOptional()
  language?: string;

  @IsNumber()
  @Min(0)
  @IsOptional()
  price?: number;

  @IsBoolean()
  @IsOptional()
  isPublished?: boolean;
}
