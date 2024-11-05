import { body } from 'express-validator';

export const createAuthorValidation = [
    body('name').isString().withMessage('Nama penulis harus berupa teks'),
    body('bio').isString().withMessage('Biografi harus berupa teks'),
];
