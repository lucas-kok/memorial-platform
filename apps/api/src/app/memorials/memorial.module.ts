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
        const neo4jUri = 'bolt://3.93.154.145:7687';
        const neo4jUser = 'neo4j';
        const neo4jPassword = 'NJodUVy3VcAjgZKx';
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
