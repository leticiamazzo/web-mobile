import * as mongoose from 'mongoose';

export const DisposalRecordSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  id: { type: Number, required: true },
  disposalPoint: { type: String, required: true },
  residueType: { type: String, required: true },
  date: { type: Date, required: true },
});

export interface DisposalRecord extends mongoose.Document {
  userName: string;
  id: string;
  disposalPoint: string;
  residueType: string;
  date: Date;
}
