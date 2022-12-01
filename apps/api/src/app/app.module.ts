import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './user/users.controller';
import { UsersService } from './user/users.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/authentication')],
  controllers: [AppController, UsersController],
  providers: [AppService, UsersService],
})
export class AppModule {}
