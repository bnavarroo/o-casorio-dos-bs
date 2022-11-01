/*
  Warnings:

  - You are about to alter the column `confirmed` on the `Guest` table. The data in that column could be lost. The data in that column will be cast from `Int` to `TinyInt`.

*/
-- AlterTable
ALTER TABLE `Guest` MODIFY `confirmed` BOOLEAN NOT NULL DEFAULT false;
