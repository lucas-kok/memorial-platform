import { Test, TestingModule } from '@nestjs/testing';

import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let app: TestingModule;
  let appController: AppController;
  let appService: AppService;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appService = app.get<AppService>(AppService);
    appController = new AppController(appService);
  });

  describe('getData', () => {
    it('should be defined', () => {
      expect(appController).toBeDefined();
    });

    it('should return "Welcome to api!"', () => {
      expect(appController.getData()).toEqual({ message: 'Welcome to api!' });
    });
  });
});
