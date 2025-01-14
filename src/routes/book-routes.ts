import express from 'express';
import { getBooks, createBook } from '../controllers/book-controller';

const router = express.Router();

router.get('/books', getBooks);
router.post('/books', createBook);

export default router;
