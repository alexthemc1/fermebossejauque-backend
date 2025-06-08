-- CreateTable
CREATE TABLE "Histoire" (
    "id" SERIAL NOT NULL,
    "titre" TEXT NOT NULL,
    "annee" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,

    CONSTRAINT "Histoire_pkey" PRIMARY KEY ("id")
);
