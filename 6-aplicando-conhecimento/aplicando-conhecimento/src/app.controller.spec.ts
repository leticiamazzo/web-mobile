import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('convertDistance', () => {
    it('should convert 1000 meters to kilometers', () => {
      const result = appController.convertDistance('1000', 'm', 'km');
      expect(result).toContain('1000 metro(s)');
      expect(result).toContain('quilometro(s)');
    });
  });
});
