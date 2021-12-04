import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const CategoryService = {

    findAll: async () => {
        return await prisma.category.findMany({
            orderBy: { 'id': 'desc' }
        });
    },

    findByName: async (name: string) => {
        return await prisma.category.findFirst({
            where: { name }
        });
    },

    findById: async (id: number) => {
        return await prisma.category.findUnique({
            where: { id }
        });
    },

    create: async (name: string) => {
        return await prisma.category.create({
            data: { name }
        });
    },

    remove: async (id: number) => {
        return await prisma.category.delete({
            where: { id }
        });
    }

}