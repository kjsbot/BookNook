import express from "express";
import { getBook, newBook, updateStatus, deleteBook } from '../controllers/book.js'

const router = express.Router();

router.get('/:id', getBook);
router.post('/', newBook);
router.patch('/:id', updateStatus);
router.delete('/:id', deleteBook);

export default router;