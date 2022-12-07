import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { PersonModule } from './persons/person.module';
import { FuneralModule } from './funeral/funeral.module';
import { MemorialModule } from './memorials/memorial.module';
import { MessageModule } from './messages/mesasge.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/memorial-platform'),
    UsersModule,
    AuthModule,
    PersonModule,
    FuneralModule,
    MemorialModule,
    MessageModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
