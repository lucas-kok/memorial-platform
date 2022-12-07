import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { FuneralDto } from './funeral.dto';
import { Funeral, FuneralDocument } from './funeral.model';

@Injectable()
export class FuneralsService {
  constructor(
    @InjectModel('funeral')
    private readonly funeralModel: Model<FuneralDocument>
  ) {}

  async addFuneral(funeralDto: FuneralDto, userId: string): Promise<Funeral> {
    Logger.log(
      '[FuneralsService] addfuneral called with userId: {' + userId + '}'
    );
    Logger.log(funeralDto);

    const funeral = {
      userId,
      ...funeralDto,
    };

    return await this.funeralModel.create(funeral);
  }

  async getAllFunerals(): Promise<Funeral[]> {
    Logger.log('[FuneralsService] getAllFunerals called');

    return await this.funeralModel.find({});
  }

  async getFuneralById(_id: string): Promise<Funeral | null> {
    Logger.log('[FuneralsService] getFuneralById(' + _id + ') called');

    return await this.funeralModel.findById({ _id: new Types.ObjectId(_id) });
  }

  async updateFuneral(
    _id: string,
    userId: string,
    funeralDto: FuneralDto
  ): Promise<Funeral | null> {
    Logger.log(
      '[FuneralsService] updateFuneral(' +
        _id +
        ') called with userId: {' +
        userId +
        '}'
    );
    Logger.log(funeralDto);

    const funeral = {
      _id,
      userId,
      ...funeralDto,
    };

    return await this.funeralModel.findOneAndUpdate(
      { _id: new Types.ObjectId(_id) },
      funeral,
      { new: true }
    );
  }

  removeFuneralById() {
    Logger.log('[FuneralsService] removeFuneralById called');
  }
}
