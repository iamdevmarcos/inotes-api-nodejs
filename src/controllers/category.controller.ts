import { Request, Response } from 'express';
import { CategoryService } from '../services/CategoryService';

export const all = async (req: Request, res: Response) => {
    const categories = await CategoryService.findAll();
    res.json({ categories });
}

export const get = async (req: Request, res: Response) => {}
export const create = async (req: Request, res: Response) => {}
export const remove = async (req: Request, res: Response) => {}