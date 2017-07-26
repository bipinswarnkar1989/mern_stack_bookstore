import express from 'express';
import * as  bookController from '../controllers/book.server.controller';

const router = express.Router();



router.route('/')
      .get(bookController.getBooks)
      .post(bookController.addBook);

router.route('/:id')
      .get(bookController.getBookById);


export default router;
