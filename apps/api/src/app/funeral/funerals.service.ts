import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FuneralDocument } from './funeral.model';

@Injectable()
export class FuneralsService {
  constructor(
    @InjectModel('funeral')
    private readonly funeralModel: Model<FuneralDocument>
  ) {}

  addFuneral() {
    Logger.log('[FuneralsService] addfuneral called');
  }

  getAllFunerals() {
    Logger.log('[FuneralsService] getAllFunerals called');
  }

  getFuneralById() {
    Logger.log('[FuneralsService] getFuneralById called');
  }

  updateFuneral() {
    Logger.log('[FuneralsService] updateFuneral called');
  }

  removeFuneralById() {
    Logger.log('[FuneralsService] removeFuneralById called');
  }
}
