import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@prisma/client';
import { httpError } from '../errorHandler/httpError';

const prisma = new PrismaClient();

export const getAllProducts = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const products = await prisma.product.findMany();
    res.status(200).json(products);
  } catch (err) {
    next(new httpError('Failed to fetch products', 500));
  }
};

export const getProductById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const product = await prisma.product.findUnique({
      where: { id: Number(req.params.id) },
    });

    if (!product) {
      throw new httpError('Produkt nicht gefunden', 404);
    }

    res.status(200).json(product);
  } catch (error) {
    next(error instanceof httpError ? error : new httpError('Fehler beim Abrufen des Produkts', 500));
  }
};

export const createProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, description, price, stock, category, image } = req.body;
    const product = await prisma.product.create({
      data: { name, description, price, stock, category, image },
    });

    res.status(201).json(product);
  } catch (err) {
    next(new httpError('Failed to create product', 500));
  }
};

export const updateProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const { name, description, price, stock, category, image } = req.body;

    const updatedProduct = await prisma.product.update({
      where: { id: parseInt(id) },
      data: { name, description, price, stock, category, image },
    });

    res.status(200).json(updatedProduct);
  } catch (err) {
    next(new httpError('Failed to update product', 500));
  }
};

export const deleteProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;

    await prisma.product.delete({
      where: { id: parseInt(id) },
    });

    res.status(204).send();
  } catch (err) {
    next(new httpError('Failed to delete product', 500));
  }
};
