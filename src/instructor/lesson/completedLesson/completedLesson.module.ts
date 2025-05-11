import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { CompletedLessonService } from "./completedLesson.service";
import { CompletedLessonRepo } from "src/db/completedLesson/completedLesson.repo";
import { CompletedLessonController } from "./completedLesson.controller";
import { CompletedLesson, completedLessonSchema } from "src/db/completedLesson/completedLesson.model";

@Module({
    imports:[
        MongooseModule.forFeature([{ name: CompletedLesson.name, schema: completedLessonSchema }])
    ],
    providers:[CompletedLessonService, CompletedLessonRepo],
    controllers:[CompletedLessonController]

})
export class CompletedLessonModule{}