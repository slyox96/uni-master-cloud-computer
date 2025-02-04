import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@prisma/client';
import { httpError } from '../errorHandler/httpError';

const prisma = new PrismaClient();


export const getAllOrders = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const orders = await prisma.order.findMany({
      include: {
        orderItems: true,
        Product: true,
      },
    });
    res.status(200).json(orders);
  } catch (err) {
    next(new httpError('Failed to fetch orders', 500));
  }
};

export const getOrderById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { orderNumber } = req.params;
    const order = await prisma.order.findUnique({
      where: { orderNumber },
      include: {
        orderItems: true,
        Product: true,
      },
    });

    if (!order) {
      throw new httpError('Order not found', 404);
    }

    res.status(200).json(order);
  } catch (err) {
    next(err instanceof httpError ? err : new httpError('Failed to fetch the order', 500));
  }
};

export const createOrder = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { orderNumber, totalAmount, status, paymentMethod, orderItems } = req.body;

    const order = await prisma.order.create({
      data: {
        orderNumber,
        totalAmount,
        status,
        paymentMethod,
        orderItems: {
          create: orderItems,
        },
      },
      include: {
        orderItems: true,
      },
    });

    res.status(201).json(order);
  } catch (err) {
    next(new httpError('Failed to create order', 500));
  }
};

export const updateOrder = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { orderNumber } = req.params;
    const { totalAmount, status, paymentMethod } = req.body;

    const order = await prisma.order.update({
      where: { orderNumber },
      data: { totalAmount, status, paymentMethod },
      include: {
        orderItems: true,
      },
    });

    res.status(200).json(order);
  } catch (err) {
    next(new httpError('Failed to update order', 500));
  }
};

export const deleteOrder = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { orderNumber } = req.params;

    const order = await prisma.order.delete({
      where: { orderNumber },
    });

    res.status(204).send();
  } catch (err) {
    next(new httpError('Failed to delete order', 500));
  }
};
