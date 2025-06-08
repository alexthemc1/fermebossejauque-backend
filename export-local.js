import { PrismaClient } from './src/generated/prisma/index.js';
import fs from 'fs';

const prisma = new PrismaClient();

async function exportData() {
  try {
    console.log('🔄 Export des données locales...');
    
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

    // Statistiques
    console.log('📊 Données trouvées :');
    console.log(`- Users: ${data.users.length}`);
    console.log(`- Catégories: ${data.categories.length}`);
    console.log(`- Annonces: ${data.annonces.length}`);
    console.log(`- Commerces: ${data.commerces.length}`);
    console.log(`- Horaires: ${data.horaires.length}`);
    console.log(`- Histoires: ${data.histoires.length}`);
    console.log(`- Images galerie: ${data.galerie.length}`);
    console.log(`- Sections annonces: ${data.annoncesSections.length}`);
    console.log(`- Sections commerces: ${data.commercesSections.length}`);
    console.log(`- Galerie commerces: ${data.commercesGalerie.length}`);

    fs.writeFileSync('data-export.json', JSON.stringify(data, null, 2));
    console.log('✅ Export terminé dans data-export.json');
    
  } catch (error) {
    console.error('❌ Erreur lors de l\'export:', error);
  } finally {
    await prisma.$disconnect();
  }
}

exportData();