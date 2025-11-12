import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DisposalPoint } from './disposal-point.model';
import { DisposalRecord } from './registration-point.model';

@Injectable()
export class OdsService {
  constructor(
    @InjectModel('DisposalPoint')
    private readonly disposalPointModel: Model<DisposalPoint>,
    @InjectModel('DisposalRecord')
    private readonly disposalRecordModel: Model<DisposalRecord>,
  ) {}

  // CRUD - CREATE
  async createDisposalPoint(disposalPoint: DisposalPoint) {
    const disposalPointModel = new this.disposalPointModel({
      localName: disposalPoint.localName,
      neighborhood: disposalPoint.neighborhood,
      localType: disposalPoint.localType,
      category: disposalPoint.category,
      geolocalization: disposalPoint.geolocalization,
    });
    const result = await disposalPointModel.save();
    return result.id as string;
  }

  // CRUD - READ
  async readDisposalPoint() {
    const points = await this.disposalPointModel.find().exec();
    return points;
  }

  // CRUD - CREATE
  async createDisposalRecord(disposalRecord: DisposalRecord) {
    const disposalRecordModel = new this.disposalRecordModel({
      userName: disposalRecord.userName,
      id: disposalRecord.id,
      disposalPoint: disposalRecord.disposalPoint,
      residueType: disposalRecord.residueType,
      date: disposalRecord.date || new Date(),
    });
    const result = await disposalRecordModel.save();
    return result.id as string;
  }

  // CRUD - READ
  async readDisposalRecord(filters: any) {
    const query: any = {};

    const registros = await this.disposalRecordModel.find(query).exec();
    return registros;
  }

  // Report
  async getReport() {}
}
