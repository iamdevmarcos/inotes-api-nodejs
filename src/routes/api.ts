import { Router } from 'express';
import * as NotesController from '../controllers/notes.controller';

const router = Router();

router.get('/notes', NotesController.all);

export default router;