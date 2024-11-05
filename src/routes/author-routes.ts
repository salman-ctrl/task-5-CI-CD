import express from 'express';
import { getAuthors, createAuthor } from '../controllers/author-controller';

const router = express.Router();

router.get('/authors', getAuthors);
router.post('/authors', createAuthor);

export default router;
