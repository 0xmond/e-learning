import { Global, Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { TokenService } from './common/services/security/token.service';
import { UserModel } from './db/user/user.model';
import { UserRepo } from './db/user/user.repo';

@Global()
@Module({
  imports: [MongooseModule.forRoot(process.env.DB as string), UserModel],
  providers: [UserRepo, JwtService, TokenService],
  exports: [UserRepo, JwtService, TokenService],
})
export class GlobalModule {}
