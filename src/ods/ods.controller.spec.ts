import { Test, TestingModule } from '@nestjs/testing';
import { OdsController } from './ods.controller';
import { OdsService } from './ods.service';

describe('OdsController', () => {
  let controller: OdsController;

  const mockOdsService = {
    createDisposalPoint: jest.fn(),
    getAllPontosDescarte: jest.fn(),
    getDisposalPointById: jest.fn(),
    createDisposalRecord: jest.fn(),
    getRegistrosDescarte: jest.fn(),
    getReport: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OdsController],
      providers: [
        {
          provide: OdsService,
          useValue: mockOdsService,
        },
      ],
    }).compile();

    controller = module.get<OdsController>(OdsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
