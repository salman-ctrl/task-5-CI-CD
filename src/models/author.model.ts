import mongoose, { Schema, Document } from 'mongoose';

export interface Author extends Document {
    name: string;
    bio: string;
}

const AuthorSchema: Schema = new Schema({
    name: { type: String, required: true },
    bio: { type: String, required: true },
});

export const AuthorModel = mongoose.model<Author>('Author', AuthorSchema);
