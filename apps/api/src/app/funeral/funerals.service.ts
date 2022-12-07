import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class FuneralsService {
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
