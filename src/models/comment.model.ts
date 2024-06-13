import mongoose, { Document, Schema } from "mongoose";


export interface ID {
  $oid: string;
}
export interface IComment extends Document {
  _id: ID;
  perfume_id: ID;
  username: string;
  comment: string;
  rating: number;
  date: Date;
}


const commentSchema: Schema = new Schema({
    perfume_id: { type: String, required: true },
    username: { type: String, required: true },
    comment: { type: String, required: true },
    rating: { type: Number, required: true },
    date: { type: Date, required: true },
});

export const Comment = mongoose.model<IComment>("Comment", commentSchema);