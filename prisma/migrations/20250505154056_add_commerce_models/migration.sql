-- CreateTable
CREATE TABLE "Commerce" (
    "id" SERIAL NOT NULL,
    "titre" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "type" "TypeCommerce" NOT NULL,
    "datecreation" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Commerce_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CommerceSection" (
    "id" SERIAL NOT NULL,
    "commerceId" INTEGER NOT NULL,
    "ordre" INTEGER NOT NULL,
    "type" "TypeSection" NOT NULL,
    "contenu" TEXT NOT NULL,
    "imageUrl" TEXT,
    "videoUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CommerceSection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CommerceGalerie" (
    "id" SERIAL NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "description" TEXT,
    "commerceId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CommerceGalerie_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CommerceSection" ADD CONSTRAINT "CommerceSection_commerceId_fkey" FOREIGN KEY ("commerceId") REFERENCES "Commerce"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CommerceGalerie" ADD CONSTRAINT "CommerceGalerie_commerceId_fkey" FOREIGN KEY ("commerceId") REFERENCES "Commerce"("id") ON DELETE CASCADE ON UPDATE CASCADE;
