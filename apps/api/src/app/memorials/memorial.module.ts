import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MemorialSchema } from './memorial.model';
import { MemorialsService } from './memorials.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'memorial', schema: MemorialSchema }]),
  ],
  providers: [MemorialsService],
  controllers: [],
})
export class MemorialModule {}
