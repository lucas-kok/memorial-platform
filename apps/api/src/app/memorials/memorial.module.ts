import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MemorialSchema } from './memorial.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'memorial', schema: MemorialSchema }]),
  ],
  providers: [],
  controllers: [],
})
export class MemorialModule {}
