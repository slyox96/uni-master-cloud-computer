import express, { Request, Response } from 'express';
import cors from 'cors';
import multer from 'multer';
import fs from 'fs';
import path from 'path';

const app = express();
const PORT = process.env.STORAGE_PORT || 3000;

const CORS_ORIGIN = process.env.CORS_ORIGIN || 'http://localhost';
const CORS_PORT = process.env.CORS_PORT || 3000;

const corsOptions = {
  origin: `${CORS_ORIGIN}:${CORS_PORT}`,
  methods: process.env.CORS_METHODS,
  allowedHeaders: process.env.CORS_ALLOWED_HEADERS
};

app.use(cors(corsOptions));

// Verzeichnis für den Datei-Upload
const uploadDir = path.join(__dirname, 'uploads');

// Standardbildpfad
const defaultImagePath = path.join(__dirname, 'default', 'none.png');

// Stelle sicher, dass das Upload-Verzeichnis vorhanden ist
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Konfiguration für Multer
const storage = multer.diskStorage({
  destination: function (req: Request, file: Express.Multer.File, cb: Function) {
    cb(null, uploadDir);
  },
  filename: function (req: Request, file: Express.Multer.File, cb: Function) {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage });

// Routen für das Hochladen und Zugreifen auf Bilder
app.post('/upload', upload.single('image'), (req: Request, res: Response): any => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }

  const imageUrl = `${req.protocol}://${req.get('host')}/images/${req.file.filename}`;
  res.send(`Image uploaded successfully. Image URL: ${imageUrl}`);
});

app.get('/images/:filename', (req: Request, res: Response) => {
  const { filename } = req.params;
  const imagePath = path.join(uploadDir, filename);

  if (fs.existsSync(imagePath)) {
    res.sendFile(imagePath);
  } else {
    res.sendFile(defaultImagePath);
  }
});

app.delete('/images/:filename', (req: Request, res: Response) => {
  const { filename } = req.params;
  const imagePath = path.join(uploadDir, filename);

  if (fs.existsSync(imagePath)) {
    fs.unlinkSync(imagePath);
    res.send(`Image ${filename} deleted successfully.`);
  } else {
    res.status(404).send('Image not found.');
  }
});

// Starte den Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
