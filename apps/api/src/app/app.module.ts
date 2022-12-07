import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { PersonModule } from './persons/person.module';
import { FuneralModule } from './funeral/funeral.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/memorial-platform'),
    UsersModule,
    AuthModule,
    PersonModule,
    FuneralModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
