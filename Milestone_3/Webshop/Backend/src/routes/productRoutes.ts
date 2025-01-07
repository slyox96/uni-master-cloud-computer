import { Router, Request, Response } from 'express';
import { PrismaClient, Product } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

// GET all products
router.get('/', async (req: Request, res: Response) => {
  try {
    const products: Product[] = await prisma.product.findMany();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

// GET a single product by ID
router.get('/:id', async (req: Request, res: Response): Promise<any> => {
    try {
      const product = await prisma.product.findUnique({
        where: { id: Number(req.params.id) }
      });
  
      if (!product) {
        return res.status(404).json({ message: 'Produkt nicht gefunden' });
      }
  
      return res.status(200).json(product); 
    } catch (error: any) {
      console.error('Fehler beim Abrufen des Produkts:', error.message);
      return res.status(500).json({ message: 'Fehler beim Abrufen des Produkts', error: error.message });
    }
  });

// CREATE a new product
router.post('/', async (req: Request, res: Response) => {
  try {
    const { name, description, price, stock, categorie, image } = req.body;
    const product = await prisma.product.create({
      data: { name, description, price, stock, categorie, image },
    });

    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create product' });
  }
});

// UPDATE a product
router.put('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, description, price, stock, categorie, image } = req.body;

    const updatedProduct = await prisma.product.update({
      where: { id: parseInt(id) },
      data: { name, description, price, stock, categorie, image },
    });

    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update product' });
  }
});

// DELETE a product
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await prisma.product.delete({
      where: { id: parseInt(id) },
    });

    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete product' });
  }
});

export default router;
