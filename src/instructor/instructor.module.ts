import { Module } from '@nestjs/common';
import { CourseModule } from './course/course.module';
import { sectionModule } from './section/section.module';

@Module({
  imports: [CourseModule , sectionModule],
})
export class InstructorModule {}
