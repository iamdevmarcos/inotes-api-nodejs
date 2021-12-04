import { Router } from 'express';
import * as NoteController from '../controllers/notes.controller';
import * as CategoryController from '../controllers/category.controller';

const router = Router();

router.get('/categories', CategoryController.all);
router.get('/category/:id', CategoryController.get);
router.post('/category', CategoryController.create);
router.delete('/category/:id', CategoryController.remove);

router.get('/notes', NoteController.all);
router.get('/note/:id', NoteController.get);
router.post('/note', NoteController.create);
router.put('/note/:id', NoteController.done);
router.delete('/note/:id', NoteController.remove);

export default router;