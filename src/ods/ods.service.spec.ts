import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { OdsService } from './ods.service';
import { DisposalPoint } from './disposal-point.model';
import { DisposalRecord } from './registration-point.model';

describe('OdsService', () => {
  let service: OdsService;

  const mockDisposalPointModel = {
    find: jest.fn(),
    findById: jest.fn(),
    create: jest.fn(),
    save: jest.fn(),
    countDocuments: jest.fn(),
  };

  const mockDisposalRecordModel = {
    find: jest.fn(),
    create: jest.fn(),
    save: jest.fn(),
    countDocuments: jest.fn(),
    aggregate: jest.fn(),
    distinct: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        OdsService,
        {
          provide: getModelToken('DisposalPoint'),
          useValue: mockDisposalPointModel,
        },
        {
          provide: getModelToken('DisposalRecord'),
          useValue: mockDisposalRecordModel,
        },
      ],
    }).compile();

    service = module.get<OdsService>(OdsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
