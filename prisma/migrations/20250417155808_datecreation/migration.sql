/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Annonces` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Annonces" DROP COLUMN "createdAt",
ADD COLUMN     "datecreation" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
