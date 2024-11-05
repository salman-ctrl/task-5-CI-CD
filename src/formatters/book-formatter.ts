import { Book } from '../models/book.model';

export const formatBook = (book: Book) => ({
    id: book._id,
    title: book.title,
    authorId: book.authorId,
    publishedDate: book.publishedDate,
    pages: book.pages,
});
