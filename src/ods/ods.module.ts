import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OdsController } from './ods.controller';
import { OdsService } from './ods.service';
import { DisposalPointSchema } from './disposal-point.model';
import { DisposalRecordSchema } from './registration-point.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'DisposalPoint', schema: DisposalPointSchema },
      { name: 'DisposalRecord', schema: DisposalRecordSchema },
    ]),
  ],
  controllers: [OdsController],
  providers: [OdsService],
})
export class OdsModule {}
