/*
  Warnings:

  - You are about to drop the `CategorieAnnonces` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CategorieProduit` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Galerie` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Produit` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Annonces" DROP CONSTRAINT "Annonces_categorieId_fkey";

-- DropForeignKey
ALTER TABLE "Galerie" DROP CONSTRAINT "Galerie_annonceId_fkey";

-- DropForeignKey
ALTER TABLE "Galerie" DROP CONSTRAINT "Galerie_produitId_fkey";

-- DropForeignKey
ALTER TABLE "Produit" DROP CONSTRAINT "Produit_categorieId_fkey";

-- DropTable
DROP TABLE "CategorieAnnonces";

-- DropTable
DROP TABLE "CategorieProduit";

-- DropTable
DROP TABLE "Galerie";

-- DropTable
DROP TABLE "Produit";

-- CreateTable
CREATE TABLE "Categorie" (
    "id" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "Categorie_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Categorie_nom_key" ON "Categorie"("nom");

-- AddForeignKey
ALTER TABLE "Annonces" ADD CONSTRAINT "Annonces_categorieId_fkey" FOREIGN KEY ("categorieId") REFERENCES "Categorie"("id") ON DELETE SET NULL ON UPDATE CASCADE;
