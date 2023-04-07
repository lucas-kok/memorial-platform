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
      person: funeralDto.personId,
      ...funeralDto,
    };

    return await (
      await this.funeralModel.create(funeral)
    ).populate('person', '_id name');
  }

  async getAllFunerals(): Promise<Funeral[]> {
    Logger.log('[FuneralsService] getAllFunerals called');

    return await this.funeralModel.find({}).populate('person', '_id name');
  }

  async getFuneralById(_id: string): Promise<Funeral | null> {
    Logger.log('[FuneralsService] getFuneralById(' + _id + ') called');

    return await this.funeralModel
      .findById({ _id: new Types.ObjectId(_id) })
      .populate('person', '_id name');
  }

  async getFuneralByPersonId(personId: string): Promise<Funeral | null> {
    Logger.log(
      '[FuneralsService] getFuneralByPersonId(' + personId + ') called'
    );

    return await this.funeralModel
      .findOne({ personId: personId })
      .populate('person', '_id name');
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

    return await this.funeralModel
      .findOneAndUpdate({ _id: _id }, funeral, {
        new: true,
      })
      .populate('person', '_id name');
  }

  async removeFuneralById(_id: string): Promise<Funeral | null> {
    Logger.log('[FuneralsService] removeFuneralById(' + _id + ') called');

    return await this.funeralModel
      .findOneAndDelete({
        _id: _id,
      })
      .populate('person', '_id name');
  }
}
