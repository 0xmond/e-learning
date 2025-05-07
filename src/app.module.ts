import { Module } from '@nestjs/common';
import { GlobalModule } from './global.module';
import { AuthModule } from './auth/auth.module';
import { CategoryModule } from './admin/category/category.module';
import { SectionModule } from './instructor/section/section.module';
import { InstructorModule } from './instructor/instructor.module';

@Module({
  imports: [GlobalModule, AuthModule, InstructorModule],
})
export class AppModule {}
