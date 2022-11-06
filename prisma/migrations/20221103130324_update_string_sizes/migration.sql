/*
  Warnings:

  - You are about to alter the column `username` on the `Admin` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(20)`.
  - You are about to alter the column `password` on the `Admin` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.
  - The primary key for the `Guest` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `Guest` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(20)`.
  - You are about to alter the column `name` on the `Guest` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(50)`.

*/
-- AlterTable
ALTER TABLE `Admin` MODIFY `username` VARCHAR(20) NOT NULL,
    MODIFY `password` VARCHAR(100) NOT NULL;

-- AlterTable
ALTER TABLE `Guest` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(20) NOT NULL,
    MODIFY `name` VARCHAR(50) NOT NULL DEFAULT '',
    ADD PRIMARY KEY (`id`);
