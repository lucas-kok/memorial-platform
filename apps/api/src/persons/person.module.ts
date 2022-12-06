import { Module } from '@nestjs/common';
import { PersonsController } from './persons.controller';

@Module({
  imports: [],
  providers: [],
  controllers: [PersonsController],
})
export class PersonModule {}
