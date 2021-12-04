import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
    await prisma.category.deleteMany();
    await prisma.note.deleteMany();

    const category = await prisma.category.create({
        data: {
            name: 'Shop'
        }
    });

    const note = await prisma.note.create({
        data: {
            title: 'Buy a new macbook',
            done: true,
            categoryId: category.id
        }
    });

}

main();