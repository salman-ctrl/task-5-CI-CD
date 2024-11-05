import { Request, Response } from 'express';
import * as AuthorService from '../services/author-service';

export const getAuthors = async (req: Request, res: Response) => {
    try {
        const authors = await AuthorService.getAuthors(); // Ganti getAllAuthors dengan getAuthors
        res.status(200).json(authors);
    } catch (error) {
        res.status(500).json({ message: 'Failed to retrieve authors', error });
    }
};

export const createAuthor = async (req: Request, res: Response) => {
    try {
        const newAuthor = await AuthorService.createAuthor(req.body);
        res.status(201).json(newAuthor);
    } catch (error) {
        res.status(500).json({ message: 'Failed to create author', error });
    }
};
