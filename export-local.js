import { PrismaClient } from './src/generated/prisma/index.js';
import fs from 'fs';

const prisma = new PrismaClient();

async function exportData() {
  try {
    const data = {
      users: await prisma.user.findMany(),
      categories: await prisma.categorieAnnonce.findMany(),
      annonces: await prisma.annonces.findMany(),
      commerces: await prisma.commerce.findMany(),
      horaires: await prisma.horaire.findMany(),
      histoires: await prisma.histoire.findMany(),
      galerie: await prisma.galerie.findMany(),
      annoncesSections: await prisma.annonceSection.findMany(),
      commercesSections: await prisma.commerceSection.findMany(),
      commercesGalerie: await prisma.commerceGalerie.findMany()
    };

    fs.writeFileSync('data-export.json', JSON.stringify(data, null, 2));
    
  } catch (error) {
    console.error('Erreur lors de l\'export:', error);
  } finally {
    await prisma.$disconnect();
  }
}

exportData();
