import { IsMongoId, IsNotEmpty, IsNumber, IsOptional, IsString, Min } from 'class-validator';

export class createSectionDto{
    @IsMongoId()
    @IsNotEmpty()
    courseId: string;
  
    @IsString()
    @IsNotEmpty()
    title: string;
  
    @IsNumber()
    @Min(1)
    order: number;
  
    @IsString()
    @IsOptional()
    description?: string;
}

export class updateSectionDto  {

    @IsMongoId()
    @IsOptional()
    courseId?: string;
  
    @IsString()
    @IsOptional()
    title?: string;
  
    @IsNumber()
    @Min(1)
    @IsOptional()
    order?: number;
  
    @IsString()
    @IsOptional()
    description?: string;
}