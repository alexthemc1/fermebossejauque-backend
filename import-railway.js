import { PrismaClient } from './src/generated/prisma/index.js';
import fs from 'fs';

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: "postgresql://postgres:aKPXAAZgMHihqaHiWOWKqQSUrnYfllBO@interchange.proxy.rlwy.net:18462/railway"
    }
  }
});

async function importData() {
  try {
    const data = JSON.parse(fs.readFileSync('data-export.json', 'utf8'));
    
    for (const user of data.users) {
      await prisma.user.upsert({
        where: { id: user.id },
        update: user,
        create: user
      });
    }

    for (const cat of data.categories) {
      await prisma.categorieAnnonce.upsert({
        where: { id: cat.id },
        update: cat,
        create: cat
      });
    }

    for (const horaire of data.horaires) {
      await prisma.horaire.upsert({
        where: { id: horaire.id },
        update: horaire,
        create: horaire
      });
    }

    for (const histoire of data.histoires) {
      await prisma.histoire.upsert({
        where: { id: histoire.id },
        update: histoire,
        create: histoire
      });
    }

    for (const commerce of data.commerces) {
      await prisma.commerce.upsert({
        where: { id: commerce.id },
        update: commerce,
        create: commerce
      });
    }

    for (const annonce of data.annonces) {
      await prisma.annonces.upsert({
        where: { id: annonce.id },
        update: annonce,
        create: annonce
      });
    }

    for (const img of data.galerie) {
      await prisma.galerie.upsert({
        where: { id: img.id },
        update: img,
        create: img
      });
    }

    for (const section of data.annoncesSections) {
      await prisma.annonceSection.upsert({
        where: { id: section.id },
        update: section,
        create: section
      });
    }

    for (const section of data.commercesSections) {
      await prisma.commerceSection.upsert({
        where: { id: section.id },
        update: section,
        create: section
      });
    }

    for (const img of data.commercesGalerie) {
      await prisma.commerceGalerie.upsert({
        where: { id: img.id },
        update: img,
        create: img
      });
    }
    
  } catch (error) {
    console.error('Erreur lors de l\'import:', error);
  } finally {
    await prisma.$disconnect();
  }
}

importData();
