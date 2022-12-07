import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MemorialDocument } from './memorial.model';

@Injectable()
export class MemorialsService {
  constructor(
    @InjectModel('memorial')
    private readonly memorialModel: Model<MemorialDocument>
  ) {}

  addMemorial() {}

  getAllMemorials() {}

  getMemorialById() {}

  getMemorialFromFuneral() {}

  updateMemorial() {}

  removeMemorialById() {}
}
