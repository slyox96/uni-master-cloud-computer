import express, { NextFunction, Request, Response } from 'express';
import bodyParser from 'body-parser';

import productRoutes from './routes/productRoutes';
import orderRoutes from './routes/orderRoutes';

import { httpError } from './errorHandler/httpError';

const app = express();
const PORT = process.env.BACKEND_PORT || 3000;

app.use(bodyParser.json());

app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  if (res.headersSent) {
    return next(error);
  }

  if (error instanceof httpError) {
    res.status(error.code).json({ message: error.message });
  } else {
    res.status(500).json({ message: 'An unknown error occurred!' });
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
