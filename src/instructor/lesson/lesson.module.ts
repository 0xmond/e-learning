import { Module } from "@nestjs/common";
import { LessonRepo } from "src/db/lesson/lesson.repo";
import { LessonService } from "./lesson.service";
import { LessonController } from "./lesson.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { Lesson, lessonSchema } from "src/db/lesson/lesson.model";

@Module({
    imports:[
    MongooseModule.forFeature([{ name: Lesson.name, schema: lessonSchema }]),
    ],
    providers:[LessonRepo, LessonService],
    controllers:[LessonController]
})
export class LessonModule {}