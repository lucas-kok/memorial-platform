import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MemorialSchema } from '../memorials/memorial.model';
import { MemorialsService } from '../memorials/memorials.service';
import { MessageSchema } from './message.model';
import { MessagesController } from './messages.controller';
import { MessagesService } from './messages.service';
import neo4j from 'neo4j-driver';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'message', schema: MessageSchema },
      { name: 'memorial', schema: MemorialSchema },
    ]),
  ],
  providers: [
    MessagesService,
    MemorialsService,
    {
      provide: 'NEO4J',
      useFactory: () => {
        const neo4jUri = process.env['NEO4J_URI']!;
        const neo4jUser = process.env['NEO4J_USERNAME']!;
        const neo4jPassword = process.env['NEO4J_PASSWORD']!;
        return neo4j.driver(
          neo4jUri,
          neo4j.auth.basic(neo4jUser, neo4jPassword)
        );
      },
    },
  ],
  controllers: [MessagesController],
})
export class MessageModule {}
