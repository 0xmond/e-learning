import { Module } from '@nestjs/common';
import { GlobalModule } from './global.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [GlobalModule, AuthModule],
})
export class AppModule {}
