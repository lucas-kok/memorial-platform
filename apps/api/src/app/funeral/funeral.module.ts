import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PersonSchema } from '../persons/person.model';
import { PersonsService } from '../persons/persons.service';
import { FuneralSchema } from './funeral.model';
import { FuneralsController } from './funerals.controller';
import { FuneralsService } from './funerals.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'funeral', schema: FuneralSchema }]),
    MongooseModule.forFeature([{ name: 'person', schema: PersonSchema }]),
  ],
  providers: [FuneralsService, PersonsService],
  controllers: [FuneralsController],
})
export class FuneralModule {}
