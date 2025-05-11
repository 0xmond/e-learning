import { IsMongoId, IsNotEmpty } from "class-validator";

export class CompletedLessonDto {

    @IsMongoId()
    @IsNotEmpty()
    userId: string;
  
    @IsMongoId()
    @IsNotEmpty()
    lessonId: string;
}

