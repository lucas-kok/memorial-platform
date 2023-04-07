import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MemorialSchema } from './memorial.model';
import { MemorialsController } from './memorials.controller';
import { MemorialsService } from './memorials.service';
import neo4j from 'neo4j-driver';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'memorial', schema: MemorialSchema }]),
  ],
  providers: [
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
  controllers: [MemorialsController],
})
export class MemorialModule {}
