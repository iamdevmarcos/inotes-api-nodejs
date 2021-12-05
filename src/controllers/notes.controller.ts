import { Request, Response } from 'express';
import { CategoryService } from '../services/CategoryService';
import { NoteService } from '../services/NoteService';

export const all = async (req: Request, res: Response) => {
    const notes = await NoteService.findAll();
    res.json({ notes });
}

export const get = async (req: Request, res: Response) => {
    const { id } = req.params;

    if(id) {
        const note = await NoteService.findById(parseInt(id));

        if(note) {
            res.json({ note });
        } else {
            res.json({ error: "note not found..." })
        }
    } else {
        res.status(400).json({ error: "unsent data" });
    }
}

export const create = async (req: Request, res: Response) => {
    const { title, categoryId } = req.body;

    if(title && categoryId) {
        const category = await CategoryService.findById(parseInt(categoryId));

        if(category) {
            const note = await NoteService.findByTitle(title);

            if(!note) {
                const newNote = await NoteService.create({
                    title, categoryId: category.id
                });

                res.status(201).json({ note: newNote });
            } else {
                res.json({ error: "note already exists" });
            }
        } else {
            res.json({ error: "category not found..." });
        }
    } else {    
        res.status(400).json({ error: "unset data" });
    }
}

export const toggleDone = async (req: Request, res: Response) => {
    const { id } = req.params;

    if(id) {
        const note = await NoteService.findById(parseInt(id));

        if(note) {
            const noteUpdated = await NoteService.updateDone(
                note.id,
                { done: !note.done }
            );

            res.json({ note: noteUpdated });
        } else {
            res.json({ error: "note not found..." });
        }
    } else {
        res.status(400).json({ error: "unset data" });
    }
}

export const remove = async (req: Request, res: Response) => {
    const { id } = req.params;

    if(id) {
        const note = await NoteService.findById(parseInt(id));

        if(note) {
            await NoteService.remove(parseInt(id));
            res.json({});
        } else {
            res.json({ error: "note not found..." });
        }
    } else {
        res.status(400).json({ error: "unset data" });
    }
}