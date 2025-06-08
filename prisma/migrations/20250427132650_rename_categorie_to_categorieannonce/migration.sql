/*
  Warnings:

  - You are about to drop the `Categorie` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Annonces" DROP CONSTRAINT "Annonces_categorieId_fkey";

-- DropTable
DROP TABLE "Categorie";

-- CreateTable
CREATE TABLE "CategorieAnnonce" (
    "id" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "CategorieAnnonce_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CategorieAnnonce_nom_key" ON "CategorieAnnonce"("nom");

-- AddForeignKey
ALTER TABLE "Annonces" ADD CONSTRAINT "Annonces_categorieId_fkey" FOREIGN KEY ("categorieId") REFERENCES "CategorieAnnonce"("id") ON DELETE SET NULL ON UPDATE CASCADE;
