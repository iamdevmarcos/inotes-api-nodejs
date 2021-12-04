import { Request, Response } from 'express';
import { CategoryService } from '../services/CategoryService';

export const all = async (req: Request, res: Response) => {
    const categories = await CategoryService.findAll();
    res.json({ categories });
}

export const get = async (req: Request, res: Response) => {
    const { id } = req.params;
    if(id) {
        const category = await CategoryService.findById(parseInt(id));

        if(category) {
            res.json({ category });
        } else {
            res.json({ error: "category not found..." });
        }
    } else {
        res.status(400).json({ error: "unsent data" });
    }
}

export const create = async (req: Request, res: Response) => {
    const { name } = req.body;
    if(name) {
        const category = await CategoryService.findByName(name);
        
        if(!category) {
            const newCategory = await CategoryService.create(name);

            res.json({ category: newCategory });
        } else {
            res.json({ error: "category alreadys exists" });
        }
    } else {
        res.status(400).json({ error: "unsent data" });
    }
}

export const remove = async (req: Request, res: Response) => {
    const { id } = req.params;
    if(id) {
        const category = await CategoryService.findById(parseInt(id));

        if(category) {
            await CategoryService.remove(parseInt(id));
            res.json({})
        } else {
            res.json({ error: "category not found..." });
        }
    } else {
        res.status(400).json({ error: "unsent data" });
    }
}