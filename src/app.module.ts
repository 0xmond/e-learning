import { Module } from '@nestjs/common';
import { GlobalModule } from './global.module';
import { AuthModule } from './auth/auth.module';
import { CategoryModule } from './admin/category/category.module';

@Module({
  imports: [GlobalModule, AuthModule, CategoryModule],
})
export class AppModule {}
