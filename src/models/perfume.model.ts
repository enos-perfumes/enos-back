import mongoose, { Document, Schema } from "mongoose";

// interface IPerfume extends Document {
//   name: string;
//   description: string;
//   price: number;
//   image: string;
// }

export interface IPerfume extends Document {
  _id: ID;
  name: string;
  brand: string;
  description: string;
  price: number;
  volume: string;
  category: string;
  notes: string[];
  image: string;
  availability: boolean;
  quantity_available: number;
}

export interface ID {
  $oid: string;
}


const perfumeSchema: Schema = new Schema({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  volume: { type: String, required: true },
  category: { type: String, required: true },
  notes: { type: [String], required: true },
  image: { type: String, required: true },
  availability: { type: Boolean, required: true },
  quantity_available: { type: Number, required: true },
});



export const Perfume = mongoose.model<IPerfume>("Perfumes", perfumeSchema);
