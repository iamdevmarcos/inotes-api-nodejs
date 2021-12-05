import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

type createDataProps = {
    title: string;
    categoryId: number;
}

type updateDataProp = {
    id?: number;
    done: boolean;
}

export const NoteService = {

    findAll: async () => {
        return await prisma.note.findMany({
            orderBy: { 'id': 'desc' }
        });
    },

    findById: async (id: number) => {
        return await prisma.note.findUnique({
            where: { id }
        });
    },

    findByTitle: async (title: string) => {
        return await prisma.note.findFirst({
            where: { title }
        });
    },

    create: async (data: createDataProps) => {
        return await prisma.note.create({ data });
    },

    updateDone: async (id: number, data: updateDataProp) => {
        return await prisma.note.update({
            where: { id }, data
        });
    },

    remove: async (id: number) => {
        return await prisma.note.delete({
            where: { id }
        });
    }

}