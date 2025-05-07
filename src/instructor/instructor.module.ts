import { Module } from '@nestjs/common';
import { CourseModule } from './course/course.module';
import { SectionModule } from './section/section.module';

@Module({
  imports: [CourseModule, SectionModule],
})
export class InstructorModule {}
