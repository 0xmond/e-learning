import { Module } from '@nestjs/common';
import { CourseModule } from './course/course.module';
import { SectionModule } from './section/section.module';
import { LessonModule } from './lesson/lesson.module';

@Module({
  imports: [CourseModule, SectionModule,LessonModule],
})
export class InstructorModule {}
