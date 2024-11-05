import { BookModel } from '../models/book.model';

export const getBooks = async () => {
    return await BookModel.find().populate('authorId');
};

export const createBook = async (data: { title: string; authorId: string; publishedDate: Date; pages: number }) => {
    const book = new BookModel(data);
    return await book.save();
};
