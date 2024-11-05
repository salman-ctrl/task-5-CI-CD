import { Request, Response } from 'express';
import * as BookService from '../services/book-service';

export const getBooks = async (req: Request, res: Response) => {
    try {
        const books = await BookService.getBooks(); // Ganti getAllBooks dengan getBooks
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ message: 'Failed to retrieve books', error });
    }
};

export const createBook = async (req: Request, res: Response) => {
    try {
        const newBook = await BookService.createBook(req.body);
        res.status(201).json(newBook);
    } catch (error) {
        res.status(500).json({ message: 'Failed to create book', error });
    }
};
