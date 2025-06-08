-- CreateTable
CREATE TABLE "Galerie" (
    "id" SERIAL NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "description" TEXT,
    "annonceId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Galerie_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Galerie" ADD CONSTRAINT "Galerie_annonceId_fkey" FOREIGN KEY ("annonceId") REFERENCES "Annonces"("id") ON DELETE CASCADE ON UPDATE CASCADE;
