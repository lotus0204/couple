import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import config from './typeorm.config';


@Module({
  imports: [TypeOrmModule.forRoot(config), UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}