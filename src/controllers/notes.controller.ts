import { Request, Response } from 'express';

export const all = async (req: Request, res: Response) => {
    const notes = [{}];
    
    res.json({ notes });
}

export const get = async () => {}
export const create = async () => {}
export const done = async () => {}
export const remove = async () => {}