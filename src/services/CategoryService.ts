import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const CategoryService = {

    findAll: async () => {
        return await prisma.category.findMany({
            orderBy: { 'id': 'desc' }
        });
    }

}