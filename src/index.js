import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { PrismaClient } from './generated/prisma/index.js';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: 'dohb53xvy',
  api_key: '217723268397834',
  api_secret: '-VjyfExVfUedQVGrVC6mGi_x3F0'
});

dotenv.config();
const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

// Health check pour Railway
app.get('/', (req, res) => {
  res.status(200).json({ 
    status: 'OK',
    message: 'Backend Railway fonctionne !', 
    timestamp: new Date().toISOString(),
    port: process.env.PORT || 3001
  });
});

// Test sans base de données
app.get('/health', (req, res) => {
  res.status(200).json({ 
    status: 'healthy',
    database: 'connected',
    timestamp: new Date().toISOString()
  });
});

// Test de la base de données
app.get('/db-test', async (req, res) => {
  try {
    await prisma.$queryRaw`SELECT 1`;
    res.status(200).json({ 
      status: 'OK',
      database: 'connected successfully',
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Database test error:', error);
    res.status(500).json({ 
      status: 'ERROR',
      database: 'connection failed',
      error: error.message
    });
  }
});

// Fonction pour créer un dossier s'il n'existe pas
const ensureDirectoryExists = (dirPath) => {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
};

// Fonction pour supprimer récursivement un dossier et son contenu
const removeDirectory = (dirPath) => {
  if (fs.existsSync(dirPath)) {
    fs.rmSync(dirPath, { recursive: true, force: true });
  }
};

// Modifier la configuration de multer pour les annonces
const annonceStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    const annonceId = req.params.id || req.body.annonceId;
    if (!annonceId) {
      return cb(new Error('ID d\'annonce requis'), null);
    }
    
    const uploadDir = path.join(process.cwd(), 'public', 'uploads', 'annonces', annonceId.toString());
    ensureDirectoryExists(uploadDir);
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    
    // Déterminer le type de fichier selon l'endpoint
    if (req.route.path.includes('/galerie')) {
      // Pour les images de galerie
      const filename = `galerie-${Date.now()}${ext}`;
      cb(null, filename);
    } else if (req.route.path.includes('/sections')) {
      // Pour les images de sections
      const filename = `section-${Date.now()}${ext}`;
      cb(null, filename);
    } else {
      // Pour l'image principale
      const filename = `main${ext}`;
      cb(null, filename);
    }
  }
});

// Configuration multer pour l'image principale d'annonce
const annonceMainStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    const annonceId = req.params.id;
    const uploadDir = path.join(process.cwd(), 'public', 'uploads', 'annonces', annonceId.toString());
    ensureDirectoryExists(uploadDir);
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    cb(null, `main${ext}`);
  }
});

// Configuration multer pour les images de galerie
const galerieStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    const annonceId = req.params.id;
    const uploadDir = path.join(process.cwd(), 'public', 'uploads', 'annonces', annonceId.toString());
    ensureDirectoryExists(uploadDir);
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    const timestamp = Date.now();
    cb(null, `galerie-${timestamp}${ext}`);
  }
});

// Configuration multer pour les images de sections
const sectionStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    const annonceId = req.params.id;
    const uploadDir = path.join(process.cwd(), 'public', 'uploads', 'annonces', annonceId.toString());
    ensureDirectoryExists(uploadDir);
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    const timestamp = Date.now();
    cb(null, `section-${timestamp}${ext}`);
  }
});

// Configuration de multer pour les uploads temporaires (création d'annonce)
const tempStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadDir = path.join(process.cwd(), 'public', 'uploads', 'temp');
    ensureDirectoryExists(uploadDir);
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const ext = path.extname(file.originalname);
    cb(null, file.fieldname + '-' + uniqueSuffix + ext);
  }
});

// Filtrer les types de fichiers
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(new Error('Le fichier doit être une image'), false);
  }
};

const uploadTemp = multer({ 
  storage: tempStorage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: fileFilter
});

const uploadAnnonceMain = multer({ 
  storage: annonceMainStorage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: fileFilter
});

const uploadGalerie = multer({ 
  storage: galerieStorage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: fileFilter
});

const uploadSection = multer({ 
  storage: sectionStorage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: fileFilter
});

// Servir les fichiers statiques
app.use('/public', express.static(path.join(process.cwd(), 'public')));

// Endpoint pour télécharger une image temporaire (lors de la création d'annonce)
app.post('/api/upload/temp', uploadTemp.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'Aucun fichier téléchargé' });
    }
    
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: 'temp'
    });
    
    res.json({ 
      success: true, 
      imageUrl: result.secure_url,
      tempPath: result.public_id,
      message: 'Image téléchargée temporairement avec succès'
    });
  } catch (error) {
    console.error('Erreur lors du téléchargement temporaire de l\'image:', error);
    res.status(500).json({ message: 'Erreur lors du téléchargement de l\'image' });
  }
});

// Endpoint pour télécharger une image pour une annonce existante
app.post('/api/upload/annonce/:id', uploadTemp.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'Aucun fichier téléchargé' });
    }
    
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: `annonces/${req.params.id}`,
      public_id: 'main'
    });
    
    res.json({ 
      success: true, 
      imageUrl: result.secure_url,
      message: 'Image téléchargée avec succès'
    });
  } catch (error) {
    console.error('Erreur lors du téléchargement de l\'image:', error);
    res.status(500).json({ message: 'Erreur lors du téléchargement de l\'image' });
  }
});

// Endpoint pour télécharger une image de galerie
app.post('/api/upload/galerie/:id', uploadTemp.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'Aucun fichier téléchargé' });
    }
    
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: `annonces/${req.params.id}/galerie`
    });
    
    res.json({ 
      success: true, 
      imageUrl: result.secure_url,
      message: 'Image de galerie téléchargée avec succès'
    });
  } catch (error) {
    console.error('Erreur lors du téléchargement de l\'image de galerie:', error);
    res.status(500).json({ message: 'Erreur lors du téléchargement de l\'image de galerie' });
  }
});

// Endpoint pour télécharger une image de section
app.post('/api/upload/section/:id', uploadTemp.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'Aucun fichier téléchargé' });
    }
    
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: `annonces/${req.params.id}/sections`
    });
    
    res.json({ 
      success: true, 
      imageUrl: result.secure_url,
      message: 'Image de section téléchargée avec succès'
    });
  } catch (error) {
    console.error('Erreur lors du téléchargement de l\'image de section:', error);
    res.status(500).json({ message: 'Erreur lors du téléchargement de l\'image de section' });
  }
});

// Fonction pour déplacer une image temporaire vers le dossier de l'annonce
const moveImageToAnnonceFolder = (tempPath, annonceId, newFilename) => {
  const annonceDir = path.join(process.cwd(), 'public', 'uploads', 'annonces', annonceId.toString());
  ensureDirectoryExists(annonceDir);
  
  const newPath = path.join(annonceDir, newFilename);
  fs.renameSync(tempPath, newPath);
  
  return `/public/uploads/annonces/${annonceId}/${newFilename}`;
};

// Créer une nouvelle annonce
app.post('/api/annonces', async (req, res) => {
  const { titre, description, imageUrl, categorieId, new: isNew, tempImagePath } = req.body;
  
  if (!titre || !description || !imageUrl) {
    return res.status(400).json({ message: 'Le titre, la description et l\'image sont requis' });
  }
  
  try {
    const nouvelleAnnonce = await prisma.$transaction(async (prisma) => {
      // 1. Créer l'annonce
      const annonce = await prisma.annonces.create({
        data: {
          titre,
          description,
          imageUrl: '',
          new: isNew === true || isNew === 'true',
          categorieId: categorieId ? parseInt(categorieId) : null
        }
      });
      
      // 2. Déplacer l'image temporaire vers le dossier de l'annonce
      let finalImageUrl = imageUrl;
      if (tempImagePath && fs.existsSync(tempImagePath)) {
        const ext = path.extname(tempImagePath);
        finalImageUrl = moveImageToAnnonceFolder(tempImagePath, annonce.id, `main${ext}`);
      }
      
      // 3. Mettre à jour l'annonce avec la bonne URL d'image
      const annonceUpdated = await prisma.annonces.update({
        where: { id: annonce.id },
        data: { imageUrl: finalImageUrl }
      });
      
      return annonceUpdated;
    });
    
    res.status(201).json(nouvelleAnnonce);
  } catch (error) {
    console.error('Erreur lors de la création de l\'annonce:', error);
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

// Mettre à jour une annonce
app.put('/api/annonces/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  const { titre, description, imageUrl, categorieId, new: isNew } = req.body;
  
  try {
    const annonce = await prisma.annonces.findUnique({
      where: { id }
    });
    
    if (!annonce) {
      return res.status(404).json({ message: 'Annonce non trouvée' });
    }
    
    const annonceModifiee = await prisma.annonces.update({
      where: { id },
      data: {
        titre: titre || annonce.titre,
        description: description || annonce.description,
        imageUrl: imageUrl || annonce.imageUrl,
        new: isNew !== undefined ? (isNew === true || isNew === 'true') : annonce.new,
        categorieId: categorieId !== undefined ? (categorieId ? parseInt(categorieId) : null) : annonce.categorieId
      }
    });
    
    res.json(annonceModifiee);
  } catch (error) {
    console.error('Erreur lors de la mise à jour de l\'annonce:', error);
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

// Supprimer une annonce et son dossier d'images
app.delete('/api/annonces/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  
  try {
    const annonce = await prisma.annonces.findUnique({
      where: { id }
    });
    
    if (!annonce) {
      return res.status(404).json({ message: 'Annonce non trouvée' });
    }
    
    // Supprimer l'annonce de la base de données (cascade supprimera sections et galerie)
    await prisma.annonces.delete({
      where: { id }
    });
    
    // Supprimer le dossier complet de l'annonce
    const annonceDir = path.join(process.cwd(), 'public', 'uploads', 'annonces', id.toString());
    removeDirectory(annonceDir);
    
    res.json({ message: 'Annonce et ses images supprimées avec succès' });
  } catch (error) {
    console.error('Erreur lors de la suppression de l\'annonce:', error);
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

// Ajouter une nouvelle section à une annonce
app.post('/api/annonces/:id/sections', async (req, res) => {
  const annonceId = parseInt(req.params.id);
  const { type, contenu, imageUrl, videoUrl } = req.body;
  
  if (!type || (type !== 'IMAGE' && type !== 'VIDEO' && !contenu)) {
    return res.status(400).json({ message: 'Le type est requis et le contenu est requis pour les types TITRE et PARAGRAPHE' });
  }
  
  try {
    const annonce = await prisma.annonces.findUnique({
      where: { id: annonceId }
    });
    
    if (!annonce) {
      return res.status(404).json({ message: 'Annonce non trouvée' });
    }
    
    const lastSection = await prisma.annonceSection.findFirst({
      where: { annonceId },
      orderBy: { ordre: 'desc' }
    });
    
    const ordre = lastSection ? lastSection.ordre + 1 : 1;
    
    const nouvelleSection = await prisma.annonceSection.create({
      data: {
        annonceId,
        type,
        contenu: contenu || '',
        imageUrl,
        videoUrl,
        ordre
      }
    });
    
    res.status(201).json(nouvelleSection);
  } catch (error) {
    console.error('Erreur lors de l\'ajout de la section:', error);
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

// Ajouter une image à la galerie d'une annonce
app.post('/api/annonces/:id/galerie', async (req, res) => {
  const annonceId = parseInt(req.params.id);
  const { imageUrl, description } = req.body;
  
  if (!imageUrl) {
    return res.status(400).json({ message: 'L\'URL de l\'image est requise' });
  }
  
  try {
    const annonce = await prisma.annonces.findUnique({
      where: { id: annonceId }
    });
    
    if (!annonce) {
      return res.status(404).json({ message: 'Annonce non trouvée' });
    }
    
    const nouvelleImage = await prisma.galerie.create({
      data: {
        imageUrl,
        description,
        annonceId
      }
    });
    
    res.status(201).json(nouvelleImage);
  } catch (error) {
    console.error('Erreur lors de l\'ajout de l\'image à la galerie:', error);
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

// Supprimer une image de la galerie
app.delete('/api/galerie/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  
  try {
    const image = await prisma.galerie.findUnique({
      where: { id }
    });
    
    if (!image) {
      return res.status(404).json({ message: 'Image non trouvée' });
    }
    
    // Supprimer le fichier physique
    if (image.imageUrl && image.imageUrl.startsWith('/public/uploads/')) {
      const imagePath = path.join(process.cwd(), image.imageUrl.replace('/public', 'public'));
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    }
    
    await prisma.galerie.delete({
      where: { id }
    });
    
    res.json({ message: 'Image supprimée avec succès' });
  } catch (error) {
    console.error('Erreur lors de la suppression de l\'image:', error);
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

// Supprimer une section
app.delete('/api/sections/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  
  try {
    const section = await prisma.annonceSection.findUnique({
      where: { id }
    });
    
    if (!section) {
      return res.status(404).json({ message: 'Section non trouvée' });
    }
    
    // Supprimer l'image de la section si elle existe
    if (section.imageUrl && section.imageUrl.startsWith('/public/uploads/')) {
      const imagePath = path.join(process.cwd(), section.imageUrl.replace('/public', 'public'));
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    }
    
    await prisma.annonceSection.delete({
      where: { id }
    });
    
    res.json({ message: 'Section supprimée avec succès' });
  } catch (error) {
    console.error('Erreur lors de la suppression de la section:', error);
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

// Mettre à jour une section
app.put('/api/sections/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  const { type, contenu, imageUrl, videoUrl, ordre } = req.body;
  
  try {
    const section = await prisma.annonceSection.findUnique({
      where: { id }
    });
    
    if (!section) {
      return res.status(404).json({ message: 'Section non trouvée' });
    }
    
    const sectionModifiee = await prisma.annonceSection.update({
      where: { id },
      data: {
        type: type || section.type,
        contenu: contenu !== undefined ? contenu : section.contenu,
        imageUrl: imageUrl !== undefined ? imageUrl : section.imageUrl,
        videoUrl: videoUrl !== undefined ? videoUrl : section.videoUrl,
        ordre: ordre !== undefined ? ordre : section.ordre
      }
    });
    
    res.json(sectionModifiee);
  } catch (error) {
    console.error('Erreur lors de la mise à jour de la section:', error);
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

// Récupérer la galerie d'une annonce spécifique
app.get('/api/annonces/:id/galerie', async (req, res) => {
  const id = parseInt(req.params.id);
  
  try {
    const galerie = await prisma.galerie.findMany({
      where: { annonceId: id }
    });
    
    res.json(galerie);
  } catch (error) {
    console.error('Erreur lors de la récupération de la galerie:', error);
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

// Récupérer toutes les catégories d'annonces
app.get('/api/categories', async (req, res) => {
  try {
    const categories = await prisma.categorieAnnonce.findMany();
    res.json(categories);
  } catch (error) {
    console.error('Erreur lors de la récupération des catégories:', error);
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

// Récupérer toutes les sections d'une annonce
app.get('/api/annonces/:id/sections', async (req, res) => {
  const annonceId = parseInt(req.params.id);
  
  try {
    const sections = await prisma.annonceSection.findMany({
      where: { annonceId },
      orderBy: { ordre: 'asc' }
    });
    
    res.json(sections);
  } catch (error) {
    console.error('Erreur lors de la récupération des sections:', error);
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

// Récupérer une annonce spécifique par son ID
app.get('/api/annonces/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  
  try {
    const annonce = await prisma.annonces.findUnique({
      where: { id },
      include: {
        categorie: true,
        galerie: true,
        sections: {
          orderBy: { ordre: 'asc' }
        }
      }
    });
    
    if (!annonce) {
      return res.status(404).json({ message: 'Annonce non trouvée' });
    }
    
    res.json(annonce);
  } catch (error) {
    console.error('Erreur lors de la récupération de l\'annonce:', error);
    res.status(500).json({ message: 'Erreur serveur' });
  }
});
// Récupérer toutes les annonces
app.get('/api/annonces', async (req, res) => {
  try {
    const annonces = await prisma.annonces.findMany({
      include: {
        categorie: true,
        galerie: true,
        sections: {
          orderBy: { ordre: 'asc' }
        }
      }
    });
    res.json(annonces);
  } catch (error) {
    console.error('Erreur lors de la récupération des annonces:', error);
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

// Endpoint pour la connexion admin
app.post('/api/admin/login', async (req, res) => {
  const { username, password } = req.body;
  
  if (!username || !password) {
    return res.status(400).json({ message: 'Le nom d\'utilisateur et le mot de passe sont requis' });
  }
  
  try {
    const user = await prisma.user.findUnique({
      where: { username }
    });
    
    if (!user) {
      return res.status(401).json({ message: 'Identifiants incorrects' });
    }
    
    if (user.password !== password) {
      return res.status(401).json({ message: 'Identifiants incorrects' });
    }
    
    const sessionData = {
      userId: user.id,
      username: user.username,
      role: user.role
    };
    
    res.json({ success: true, user: sessionData });
  } catch (error) {
    console.error('Erreur lors de la connexion:', error);
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

// Endpoint pour vérifier si l'utilisateur est connecté
app.get('/api/admin/check-auth', async (req, res) => {
  const { username } = req.query;
  
  if (!username) {
    return res.status(400).json({ authenticated: false });
  }
  
  try {
    const user = await prisma.user.findUnique({
      where: { username }
    });
    
    if (!user) {
      return res.json({ authenticated: false });
    }
    
    res.json({ 
      authenticated: true, 
      user: {
        id: user.id,
        username: user.username,
        role: user.role
      }
    });
  } catch (error) {
    console.error('Erreur lors de la vérification de l\'authentification:', error);
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

// Endpoint pour créer un utilisateur admin
app.post('/api/admin/setup', async (req, res) => {
  try {
    // Vérifier si un utilisateur admin existe déjà
    const existingUser = await prisma.user.findFirst();
    
    if (existingUser) {
      return res.status(400).json({ message: 'Un utilisateur admin existe déjà' });
    }
    
    // Créer l'utilisateur admin par défaut
    const user = await prisma.user.create({
      data: {
        username: 'admin',
        password: 'fermebosse2023',
        role: 'admin'
      }
    });
    
    res.status(201).json({ message: 'Utilisateur admin créé avec succès' });
  } catch (error) {
    console.error('Erreur lors de la création de l\'utilisateur admin:', error);
    res.status(500).json({ message: 'Erreur serveur' });
  }
});


// Récupérer les horaires
app.get('/api/horaires', async (req, res) => {
  try {
    const horaires = await prisma.horaire.findMany();
    res.json(horaires);
  } catch (error) {
    console.error('Erreur lors de la récupération des horaires:', error);
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

// Récupérer les horaires d'un type de commerce spécifique
app.get('/api/horaires/:typecommerce', async (req, res) => {
  const typecommerce = req.params.typecommerce;
  
  try {
    const horaires = await prisma.horaire.findMany({
      where: { 
        typecommerce: typecommerce 
      }
    });
    
    if (horaires.length === 0) {
      return res.status(404).json({ message: 'Aucun horaire trouvé pour ce type de commerce' });
    }
    
    res.json(horaires);
  } catch (error) {
    console.error('Erreur lors de la récupération des horaires:', error);
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

// Créer un nouvel horaire
app.post('/api/horaires', async (req, res) => {
  const { jour, ouverture, fermeture, status, typecommerce } = req.body;
  
  if (!jour || typecommerce === undefined) {
    return res.status(400).json({ message: 'Le jour et le type de commerce sont requis' });
  }
  
  try {
    const nouvelHoraire = await prisma.horaire.create({
      data: {
        jour,
        ouverture: ouverture || '',
        fermeture: fermeture || '',
        status: status === true || status === 'true',
        typecommerce
      }
    });
    
    res.status(201).json(nouvelHoraire);
  } catch (error) {
    console.error('Erreur lors de la création de l\'horaire:', error);
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

// Mettre à jour un horaire
app.put('/api/horaires/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  const { jour, ouverture, fermeture, status, typecommerce } = req.body;
  
  try {
    const horaire = await prisma.horaire.findUnique({
      where: { id }
    });
    
    if (!horaire) {
      return res.status(404).json({ message: 'Horaire non trouvé' });
    }
    
    const horaireModifie = await prisma.horaire.update({
      where: { id },
      data: {
        jour: jour || horaire.jour,
        ouverture: ouverture !== undefined ? ouverture : horaire.ouverture,
        fermeture: fermeture !== undefined ? fermeture : horaire.fermeture,
        status: status !== undefined ? (status === true || status === 'true') : horaire.status,
        typecommerce: typecommerce || horaire.typecommerce
      }
    });
    
    res.json(horaireModifie);
  } catch (error) {
    console.error('Erreur lors de la mise à jour de l\'horaire:', error);
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

// Supprimer un horaire
app.delete('/api/horaires/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  
  try {
    const horaire = await prisma.horaire.findUnique({
      where: { id }
    });
    
    if (!horaire) {
      return res.status(404).json({ message: 'Horaire non trouvé' });
    }
    
    await prisma.horaire.delete({
      where: { id }
    });
    
    res.json({ message: 'Horaire supprimé avec succès' });
  } catch (error) {
    console.error('Erreur lors de la suppression de l\'horaire:', error);
    res.status(500).json({ message: 'Erreur serveur' });
  }
});


// Récupérer tous les commerces
app.get('/api/commerces', async (req, res) => {
  try {
    const commerces = await prisma.commerce.findMany({
      include: {
        galerie: true,
        sections: {
          orderBy: { ordre: 'asc' }
        }
      }
    });
    res.json(commerces);
  } catch (error) {
    console.error('Erreur lors de la récupération des commerces:', error);
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

// Récupérer un commerce spécifique par son ID
app.get('/api/commerces/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  
  try {
    const commerce = await prisma.commerce.findUnique({
      where: { id },
      include: {
        galerie: true,
        sections: {
          orderBy: { ordre: 'asc' }
        }
      }
    });
    
    if (!commerce) {
      return res.status(404).json({ message: 'Commerce non trouvé' });
    }
    
    res.json(commerce);
  } catch (error) {
    console.error('Erreur lors de la récupération du commerce:', error);
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

// Récupérer les commerces par type (MAGASIN ou BOUCHERIE)
app.get('/api/commerces/type/:type', async (req, res) => {
  const type = req.params.type.toUpperCase();
  
  if (!['MAGASIN', 'BOUCHERIE'].includes(type)) {
    return res.status(400).json({ message: 'Type de commerce invalide. Utilisez MAGASIN ou BOUCHERIE.' });
  }
  
  try {
    const commerces = await prisma.commerce.findMany({
      where: { type },
      include: {
        galerie: true,
        sections: {
          orderBy: { ordre: 'asc' }
        }
      }
    });
    
    res.json(commerces);
  } catch (error) {
    console.error('Erreur lors de la récupération des commerces par type:', error);
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

// Créer un nouveau commerce
app.post('/api/commerces', async (req, res) => {
  const { titre, description, imageUrl, type, telephone } = req.body;
  
  if (!titre || !description || !imageUrl || !type) {
    return res.status(400).json({ message: 'Le titre, la description, l\'image et le type sont requis' });
  }
  
  if (!['MAGASIN', 'BOUCHERIE'].includes(type.toUpperCase())) {
    return res.status(400).json({ message: 'Type de commerce invalide. Utilisez MAGASIN ou BOUCHERIE.' });
  }
  
  try {
    const nouveauCommerce = await prisma.commerce.create({
      data: {
        titre,
        description,
        imageUrl,
        type: type.toUpperCase(),
        telephone
      }
    });
    
    res.status(201).json(nouveauCommerce);
  } catch (error) {
    console.error('Erreur lors de la création du commerce:', error);
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

// Mettre à jour un commerce
app.put('/api/commerces/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  const { titre, description, imageUrl, type, telephone } = req.body;
  
  try {
    const commerce = await prisma.commerce.findUnique({
      where: { id }
    });
    
    if (!commerce) {
      return res.status(404).json({ message: 'Commerce non trouvé' });
    }
    
    const updateData = {};
    if (titre !== undefined) updateData.titre = titre;
    if (description !== undefined) updateData.description = description;
    if (imageUrl !== undefined) updateData.imageUrl = imageUrl;
    if (telephone !== undefined) updateData.telephone = telephone;
    if (type !== undefined) {
      if (!['MAGASIN', 'BOUCHERIE'].includes(type.toUpperCase())) {
        return res.status(400).json({ message: 'Type de commerce invalide. Utilisez MAGASIN ou BOUCHERIE.' });
      }
      updateData.type = type.toUpperCase();
    }
    
    const commerceModifie = await prisma.commerce.update({
      where: { id },
      data: updateData
    });
    
    res.json(commerceModifie);
  } catch (error) {
    console.error('Erreur lors de la mise à jour du commerce:', error);
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

// Supprimer un commerce et son dossier d'images
app.delete('/api/commerces/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  
  try {
    const commerce = await prisma.commerce.findUnique({
      where: { id }
    });
    
    if (!commerce) {
      return res.status(404).json({ message: 'Commerce non trouvé' });
    }
    
    await prisma.commerce.delete({
      where: { id }
    });
    
    // Supprimer le dossier complet du commerce
    const commerceDir = path.join(process.cwd(), 'public', 'uploads', 'commerces', id.toString());
    removeDirectory(commerceDir);
    
    res.json({ message: 'Commerce et ses images supprimés avec succès' });
  } catch (error) {
    console.error('Erreur lors de la suppression du commerce:', error);
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

// Ajouter une section à un commerce
app.post('/api/commerces/:id/sections', async (req, res) => {
  const commerceId = parseInt(req.params.id);
  const { type, contenu, imageUrl, videoUrl } = req.body;
  
  if (!type || (type !== 'IMAGE' && type !== 'VIDEO' && !contenu)) {
    return res.status(400).json({ message: 'Le type est requis et le contenu est requis pour les types TITRE et PARAGRAPHE' });
  }
  
  try {
    const commerce = await prisma.commerce.findUnique({
      where: { id: commerceId }
    });
    
    if (!commerce) {
      return res.status(404).json({ message: 'Commerce non trouvé' });
    }
    
    const lastSection = await prisma.commerceSection.findFirst({
      where: { commerceId },
      orderBy: { ordre: 'desc' }
    });
    
    const ordre = lastSection ? lastSection.ordre + 1 : 1;
    
    const nouvelleSection = await prisma.commerceSection.create({
      data: {
        commerceId,
        type,
        contenu: contenu || '',
        imageUrl,
        videoUrl,
        ordre
      }
    });
    
    res.status(201).json(nouvelleSection);
  } catch (error) {
    console.error('Erreur lors de l\'ajout de la section:', error);
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

// Ajouter une image à la galerie d'un commerce
app.post('/api/commerces/:id/galerie', async (req, res) => {
  const commerceId = parseInt(req.params.id);
  const { imageUrl, description } = req.body;
  
  if (!imageUrl) {
    return res.status(400).json({ message: 'L\'URL de l\'image est requise' });
  }
  
  try {
    const commerce = await prisma.commerce.findUnique({
      where: { id: commerceId }
    });
    
    if (!commerce) {
      return res.status(404).json({ message: 'Commerce non trouvé' });
    }
    
    const nouvelleImage = await prisma.commerceGalerie.create({
      data: {
        imageUrl,
        description,
        commerceId
      }
    });
    
    res.status(201).json(nouvelleImage);
  } catch (error) {
    console.error('Erreur lors de l\'ajout de l\'image à la galerie:', error);
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

// Récupérer les sections d'un commerce
app.get('/api/commerces/:id/sections', async (req, res) => {
  const commerceId = parseInt(req.params.id);
  
  try {
    const sections = await prisma.commerceSection.findMany({
      where: { commerceId },
      orderBy: { ordre: 'asc' }
    });
    
    res.json(sections);
  } catch (error) {
    console.error('Erreur lors de la récupération des sections:', error);
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

// Récupérer la galerie d'un commerce
app.get('/api/commerces/:id/galerie', async (req, res) => {
  const commerceId = parseInt(req.params.id);
  
  try {
    const galerie = await prisma.commerceGalerie.findMany({
      where: { commerceId }
    });
    
    res.json(galerie);
  } catch (error) {
    console.error('Erreur lors de la récupération de la galerie:', error);
    res.status(500).json({ message: 'Erreur serveur' });
  }
});
// Configuration multer pour l'image principale de commerce
const commerceMainStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    const commerceId = req.params.id;
    const uploadDir = path.join(process.cwd(), 'public', 'uploads', 'commerces', commerceId.toString());
    ensureDirectoryExists(uploadDir);
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    cb(null, `main${ext}`);
  }
});

// Configuration multer pour les images de galerie de commerce
const commerceGalerieStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    const commerceId = req.params.id;
    const uploadDir = path.join(process.cwd(), 'public', 'uploads', 'commerces', commerceId.toString());
    ensureDirectoryExists(uploadDir);
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    const timestamp = Date.now();
    cb(null, `galerie-${timestamp}${ext}`);
  }
});

// Configuration multer pour les images de sections de commerce
const commerceSectionStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    const commerceId = req.params.id;
    const uploadDir = path.join(process.cwd(), 'public', 'uploads', 'commerces', commerceId.toString());
    ensureDirectoryExists(uploadDir);
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    const timestamp = Date.now();
    cb(null, `section-${timestamp}${ext}`);
  }
});

const uploadCommerceMain = multer({ 
  storage: commerceMainStorage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: fileFilter
});

const uploadCommerceGalerie = multer({ 
  storage: commerceGalerieStorage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: fileFilter
});

const uploadCommerceSection = multer({ 
  storage: commerceSectionStorage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: fileFilter
});
// Endpoint pour télécharger une image principale pour un commerce
app.post('/api/upload/commerce/:id', uploadTemp.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'Aucun fichier téléchargé' });
    }
    
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: `commerces/${req.params.id}`,
      public_id: 'main'
    });
    
    res.json({ 
      success: true, 
      imageUrl: result.secure_url,
      message: 'Image de commerce téléchargée avec succès'
    });
  } catch (error) {
    console.error('Erreur lors du téléchargement de l\'image de commerce:', error);
    res.status(500).json({ message: 'Erreur lors du téléchargement de l\'image de commerce' });
  }
});

// Endpoint pour télécharger une image de galerie pour un commerce
app.post('/api/upload/commerce-galerie/:id', uploadTemp.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'Aucun fichier téléchargé' });
    }
    
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: `commerces/${req.params.id}/galerie`
    });
    
    res.json({ 
      success: true, 
      imageUrl: result.secure_url,
      message: 'Image de galerie de commerce téléchargée avec succès'
    });
  } catch (error) {
    console.error('Erreur lors du téléchargement de l\'image de galerie de commerce:', error);
    res.status(500).json({ message: 'Erreur lors du téléchargement de l\'image de galerie de commerce' });
  }
});

// Endpoint pour télécharger une image de section pour un commerce
app.post('/api/upload/commerce-section/:id', uploadTemp.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'Aucun fichier téléchargé' });
    }
    
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: `commerces/${req.params.id}/sections`
    });
    
    res.json({ 
      success: true, 
      imageUrl: result.secure_url,
      message: 'Image de section de commerce téléchargée avec succès'
    });
  } catch (error) {
    console.error('Erreur lors du téléchargement de l\'image de section de commerce:', error);
    res.status(500).json({ message: 'Erreur lors du téléchargement de l\'image de section de commerce' });
  }
});

// Supprimer une image de galerie de commerce
app.delete('/api/commerce-galerie/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  
  try {
    const image = await prisma.commerceGalerie.findUnique({
      where: { id }
    });
    
    if (!image) {
      return res.status(404).json({ message: 'Image non trouvée' });
    }
    
    // Supprimer le fichier physique
    if (image.imageUrl && image.imageUrl.startsWith('/public/uploads/')) {
      const imagePath = path.join(process.cwd(), image.imageUrl.replace('/public', 'public'));
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    }
    
    await prisma.commerceGalerie.delete({
      where: { id }
    });
    
    res.json({ message: 'Image de commerce supprimée avec succès' });
  } catch (error) {
    console.error('Erreur lors de la suppression de l\'image de commerce:', error);
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

// Supprimer une section de commerce
app.delete('/api/commerce-sections/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  
  try {
    const section = await prisma.commerceSection.findUnique({
      where: { id }
    });
    
    if (!section) {
      return res.status(404).json({ message: 'Section non trouvée' });
    }
    
    // Supprimer l'image de la section si elle existe
    if (section.imageUrl && section.imageUrl.startsWith('/public/uploads/')) {
      const imagePath = path.join(process.cwd(), section.imageUrl.replace('/public', 'public'));
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    }
    
    await prisma.commerceSection.delete({
      where: { id }
    });
    
    res.json({ message: 'Section de commerce supprimée avec succès' });
  } catch (error) {
    console.error('Erreur lors de la suppression de la section de commerce:', error);
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

// Mettre à jour une section de commerce
app.put('/api/commerce-sections/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  const { type, contenu, imageUrl, videoUrl, ordre } = req.body;
  
  try {
    const section = await prisma.commerceSection.findUnique({
      where: { id }
    });
    
    if (!section) {
      return res.status(404).json({ message: 'Section non trouvée' });
    }
    
    const sectionModifiee = await prisma.commerceSection.update({
      where: { id },
      data: {
        type: type || section.type,
        contenu: contenu !== undefined ? contenu : section.contenu,
        imageUrl: imageUrl !== undefined ? imageUrl : section.imageUrl,
        videoUrl: videoUrl !== undefined ? videoUrl : section.videoUrl,
        ordre: ordre !== undefined ? ordre : section.ordre
      }
    });
    
    res.json(sectionModifiee);
  } catch (error) {
    console.error('Erreur lors de la mise à jour de la section de commerce:', error);
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

// Récupérer toutes les histoires
app.get('/api/histoires', async (req, res) => {
  try {
    const histoires = await prisma.histoire.findMany({
      orderBy: { annee: 'asc' }
    });
    res.json(histoires);
  } catch (error) {
    console.error('Erreur lors de la récupération des histoires:', error);
    res.status(500).json({ message: 'Erreur serveur' });
  }
});




// app.listen(3001, () => {
//   console.log('Serveur backend lancé sur http://localhost:3001');
// });



const PORT = process.env.PORT || 3001;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Serveur backend lancé sur le port ${PORT}`);
});

process.on('SIGINT', async () => {
  await prisma.$disconnect();
  process.exit(0);
});

process.on('SIGTERM', async () => {
  await prisma.$disconnect();
  process.exit(0);
});
