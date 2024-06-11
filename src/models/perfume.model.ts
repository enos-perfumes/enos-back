import mongoose, { Document, Schema } from "mongoose";

interface IPerfume extends Document {
  name: string;
  description: string;
  price: number;
  image: string;
}

const perfumeSchema: Schema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
});

export const Perfume = mongoose.model<IPerfume>("Perfume", perfumeSchema);
