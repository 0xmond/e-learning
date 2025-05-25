import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Quiz, quizSchema } from "src/db/quiz/quiz.model";
import { QuizService } from "./quiz.service";
import { QuizRepo } from "src/db/quiz/quiz.repo";
import { QuizController } from "./quiz.controller";

@Module({
    imports:[
        MongooseModule.forFeature([
            { name: Quiz.name, schema: quizSchema }
        ])
    ],
    providers:[QuizService,QuizRepo],
    controllers:[QuizController]
})
export class QuizModule{}