import { PrismaClient } from './src/generated/prisma/index.js';
import fs from 'fs';

// Force la connexion Railway directement dans le script
const prisma = new PrismaClient({
  datasources: {
    db: {
      url: "postgresql://postgres:aKPXAAZgMHihqaHiWOWKqQSUrnYfllBO@interchange.proxy.rlwy.net:18462/railway"
    }
  }
});

async function importData() {
  try {
    console.log('🔄 Import des données vers Railway...');
    
    // Lire le fichier d'export
    const data = JSON.parse(fs.readFileSync('data-export.json', 'utf8'));
    
    console.log('📊 Données à importer :');
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

    // Import dans l'ordre (à cause des relations)
    
    // 1. Users (pas de dépendances)
    console.log('👤 Import des utilisateurs...');
    for (const user of data.users) {
      await prisma.user.upsert({
        where: { id: user.id },
        update: user,
        create: user
      });
    }

    // 2. Catégories (pas de dépendances)
    console.log('📂 Import des catégories...');
    for (const cat of data.categories) {
      await prisma.categorieAnnonce.upsert({
        where: { id: cat.id },
        update: cat,
        create: cat
      });
    }

    // 3. Horaires (pas de dépendances)
    console.log('🕐 Import des horaires...');
    for (const horaire of data.horaires) {
      await prisma.horaire.upsert({
        where: { id: horaire.id },
        update: horaire,
        create: horaire
      });
    }

    // 4. Histoires (pas de dépendances)
    console.log('📚 Import des histoires...');
    for (const histoire of data.histoires) {
      await prisma.histoire.upsert({
        where: { id: histoire.id },
        update: histoire,
        create: histoire
      });
    }

    // 5. Commerces (pas de dépendances)
    console.log('🏪 Import des commerces...');
    for (const commerce of data.commerces) {
      await prisma.commerce.upsert({
        where: { id: commerce.id },
        update: commerce,
        create: commerce
      });
    }

    // 6. Annonces (dépend des catégories)
    console.log('📢 Import des annonces...');
    for (const annonce of data.annonces) {
      await prisma.annonces.upsert({
        where: { id: annonce.id },
        update: annonce,
        create: annonce
      });
    }

    // 7. Galerie annonces (dépend des annonces)
    console.log('🖼️ Import de la galerie des annonces...');
    for (const img of data.galerie) {
      await prisma.galerie.upsert({
        where: { id: img.id },
        update: img,
        create: img
      });
    }

    // 8. Sections annonces (dépend des annonces)
    console.log('📝 Import des sections d\'annonces...');
    for (const section of data.annoncesSections) {
      await prisma.annonceSection.upsert({
        where: { id: section.id },
        update: section,
        create: section
      });
    }

    // 9. Sections commerces (dépend des commerces)
    console.log('📝 Import des sections de commerces...');
    for (const section of data.commercesSections) {
      await prisma.commerceSection.upsert({
        where: { id: section.id },
        update: section,
        create: section
      });
    }

    // 10. Galerie commerces (dépend des commerces)
    console.log('🖼️ Import de la galerie des commerces...');
    for (const img of data.commercesGalerie) {
      await prisma.commerceGalerie.upsert({
        where: { id: img.id },
        update: img,
        create: img
      });
    }

    console.log('✅ Import terminé avec succès !');
    
  } catch (error) {
    console.error('❌ Erreur lors de l\'import:', error);
  } finally {
    await prisma.$disconnect();
  }
}

importData();