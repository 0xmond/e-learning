import { Module } from '@nestjs/common';
import { CourseService } from './course.service';
import { CourseController } from './course.controller';
import { CourseModel } from 'src/db/course/course.model';
import { CourseRepo } from 'src/db/course/course.repo';

@Module({
  imports: [CourseModel],
  controllers: [CourseController],
  providers: [CourseService, CourseRepo],
})
export class CourseModule {}
