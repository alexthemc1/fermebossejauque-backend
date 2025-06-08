-- CreateEnum
CREATE TYPE "TypeCommerce" AS ENUM ('MAGASIN', 'BOUCHERIE');

-- CreateTable
CREATE TABLE "Horaire" (
    "id" SERIAL NOT NULL,
    "jour" TEXT NOT NULL,
    "ouverture" TEXT NOT NULL,
    "fermeture" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "typecommerce" "TypeCommerce" NOT NULL,

    CONSTRAINT "Horaire_pkey" PRIMARY KEY ("id")
);
