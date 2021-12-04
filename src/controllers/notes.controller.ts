import { Request, Response } from 'express';

export const all = async (req: Request, res: Response) => {
    const notes = [
        {id: 1, title: 'Comprar o pão', done: false, category: 'Diarias'},
        {id: 2, title: 'Fazer as compras', done: true, category: 'Diarias'},
        {id: 3, title: 'Programar o app iNotes', done: false, category: 'Pessoais'},
    ];
    
    res.json({ notes });
}