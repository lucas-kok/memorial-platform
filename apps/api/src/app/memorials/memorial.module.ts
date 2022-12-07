import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MemorialSchema } from './memorial.model';
import { MemorialsController } from './memorials.controller';
import { MemorialsService } from './memorials.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'memorial', schema: MemorialSchema }]),
  ],
  providers: [MemorialsService],
  controllers: [MemorialsController],
})
export class MemorialModule {}
