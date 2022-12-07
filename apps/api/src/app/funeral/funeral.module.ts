import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FuneralSchema } from './funeral.model';
import { FuneralsController } from './funerals.controller';
import { FuneralsService } from './funerals.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'funeral', schema: FuneralSchema }]),
  ],
  providers: [FuneralsService],
  controllers: [FuneralsController],
})
export class FuneralModule {}
