import mongoose, { Schema, Document } from 'mongoose';

export interface Book extends Document {
    title: string;
    authorId: string;
    publishedDate: Date;
    pages: number;
}

const BookSchema: Schema = new Schema({
    title: { type: String, required: true },
    authorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Author', required: true },
    publishedDate: { type: Date, required: true },
    pages: { type: Number, required: true },
});

export const BookModel = mongoose.model<Book>('Book', BookSchema);
