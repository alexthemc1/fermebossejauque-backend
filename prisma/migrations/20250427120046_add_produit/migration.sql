/*
  Warnings:

  - You are about to drop the `Categorie` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Annonces" DROP CONSTRAINT "Annonces_categorieId_fkey";

-- DropTable
DROP TABLE "Categorie";

-- CreateTable
CREATE TABLE "Galerie" (
    "id" SERIAL NOT NULL,
    "titre" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "annonceId" INTEGER,
    "produitId" INTEGER,

    CONSTRAINT "Galerie_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CategorieAnnonces" (
    "id" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "CategorieAnnonces_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CategorieProduit" (
    "id" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,
    "description" TEXT,
    "backgroundimage" TEXT,

    CONSTRAINT "CategorieProduit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Produit" (
    "id" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,
    "description" TEXT,
    "imageUrl" TEXT NOT NULL,
    "categorieId" INTEGER,

    CONSTRAINT "Produit_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CategorieAnnonces_nom_key" ON "CategorieAnnonces"("nom");

-- CreateIndex
CREATE UNIQUE INDEX "CategorieProduit_nom_key" ON "CategorieProduit"("nom");

-- AddForeignKey
ALTER TABLE "Galerie" ADD CONSTRAINT "Galerie_annonceId_fkey" FOREIGN KEY ("annonceId") REFERENCES "Annonces"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Galerie" ADD CONSTRAINT "Galerie_produitId_fkey" FOREIGN KEY ("produitId") REFERENCES "Produit"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Annonces" ADD CONSTRAINT "Annonces_categorieId_fkey" FOREIGN KEY ("categorieId") REFERENCES "CategorieAnnonces"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Produit" ADD CONSTRAINT "Produit_categorieId_fkey" FOREIGN KEY ("categorieId") REFERENCES "CategorieProduit"("id") ON DELETE SET NULL ON UPDATE CASCADE;
