import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MemorialDto } from './memorial.dto';
import { Memorial, MemorialDocument } from './memorial.model';

@Injectable()
export class MemorialsService {
  constructor(
    @InjectModel('memorial')
    private readonly memorialModel: Model<MemorialDocument>
  ) {}

  async addMemorial(
    MemorialDto: MemorialDto,
    userId: string
  ): Promise<Memorial> {
    Logger.log(
      '[MemorialsService] addMemorial called with userId: {' + userId + '}'
    );
    Logger.log(MemorialDto);

    const memorial = {
      userId,
      ...MemorialDto,
    };

    return await this.memorialModel.create(memorial);
  }

  async getAllMemorials(): Promise<Memorial[]> {
    Logger.log('[MemorialsService] getAllMemorials called');

    return await this.memorialModel.find({});
  }

  getMemorialById() {}

  getMemorialFromFuneral() {}

  updateMemorial() {}

  removeMemorialById() {}
}
