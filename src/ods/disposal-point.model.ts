import * as mongoose from 'mongoose';

export const DisposalPointSchema = new mongoose.Schema({
  localName: { type: String, required: true },
  neighborhood: { type: String, required: true },
  localType: { type: String, required: true },
  category: { type: String, required: true },
  geolocalization: { type: Number, required: true },
});

export interface DisposalPoint extends mongoose.Document {
  localName: string;
  neighborhood: string;
  localType: string;
  category: string;
  geolocalization: number;
}

