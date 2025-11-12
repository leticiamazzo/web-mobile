import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { OdsService } from './ods.service';
import type { DisposalPoint } from './disposal-point.model';
import type { DisposalRecord } from './registration-point.model';

@Controller('ods')
export class OdsController {
  constructor(private readonly odsService: OdsService) {}

  @Post('disposal-point')
  async createDisposalPoint(@Body() disposalPoint: DisposalPoint): Promise<any> {
    const response = await this.odsService.createDisposalPoint(disposalPoint);
    return { id: response };
  }

  @Get('disposal-point')
  readDisposalPoint(): Promise<any> {
    return this.odsService.readDisposalPoint();
  }

  @Post('records-disposal')
  async createDisposalRecord(@Body() disposalRecord: DisposalRecord): Promise<any> {
    const response = await this.odsService.createDisposalRecord(disposalRecord);
    return { id: response };
  }

  @Get('records-disposal')
  readRecordsDiscard(@Query() filters: any): Promise<any> {
    return this.odsService.readDisposalRecord(filters);
  }

  @Get('report')
  getReport(): Promise<any> {
    return this.odsService.getReport();
  }
}
