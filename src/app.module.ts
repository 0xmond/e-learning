import { Module } from '@nestjs/common';
import { GlobalModule } from './global.module';
import { AuthModule } from './auth/auth.module';
import { CategoryModule } from './admin/category/category.module';
import { sectionModule } from './instructor/section/section.module';

@Module({
  imports: [GlobalModule, AuthModule, CategoryModule, sectionModule],
})
export class AppModule {}
