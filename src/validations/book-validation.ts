import { body } from 'express-validator';

export const createBookValidation = [
    body('title').isString().withMessage('Judul buku harus berupa teks'),
    body('authorId').isString().withMessage('ID penulis harus berupa teks'),
    body('publishedDate').isDate().withMessage('Tanggal terbit harus berupa tanggal'),
];
