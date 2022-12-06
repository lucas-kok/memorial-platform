import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PersonSchema } from './person.model';
import { PersonsController } from './persons.controller';
import { PersonsService } from './persons.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'person', schema: PersonSchema }]),
  ],
  providers: [PersonsService],
  controllers: [PersonsController],
})
export class PersonModule {}
