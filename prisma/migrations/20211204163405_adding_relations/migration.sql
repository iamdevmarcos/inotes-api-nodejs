/*
  Warnings:

  - Added the required column `categoryId` to the `notes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `notes` ADD COLUMN `categoryId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `notes` ADD CONSTRAINT `notes_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `categories`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
