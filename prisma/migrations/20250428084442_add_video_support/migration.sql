-- CreateEnum
CREATE TYPE "TypeSection" AS ENUM ('TITRE', 'PARAGRAPHE', 'IMAGE', 'VIDEO');

-- CreateTable
CREATE TABLE "AnnonceSection" (
    "id" SERIAL NOT NULL,
    "annonceId" INTEGER NOT NULL,
    "ordre" INTEGER NOT NULL,
    "type" "TypeSection" NOT NULL,
    "contenu" TEXT NOT NULL,
    "imageUrl" TEXT,
    "videoUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AnnonceSection_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "AnnonceSection" ADD CONSTRAINT "AnnonceSection_annonceId_fkey" FOREIGN KEY ("annonceId") REFERENCES "Annonces"("id") ON DELETE CASCADE ON UPDATE CASCADE;
