import express, { NextFunction, Request, Response } from 'express';
import bodyParser from 'body-parser';
import { HttpError } from './errorHandler/HttpError'; 
import productRoutes from './routes/productRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/api/products', productRoutes);

app.use(
  (error: HttpError, req: Request, res: Response, next: NextFunction): any => {
    if (error instanceof HttpError) {
      return res.status(error.code).json({ message: error.message });
    }

    // Falls der Fehler kein HttpError ist oder nicht instanziiert wurde
    res.status(500).json({ message: 'Internal server error' });
  }
);


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
