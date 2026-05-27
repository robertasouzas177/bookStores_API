import express from 'express';
import cors from 'cors';

import productsRoutes from './routes/products.routes';
import clientsRoutes from './routes/clients.routes';
import salesRoutes from './routes/sales.routes';
import authRoutes from './routes/auth.routes';
import usersRoutes from './routes/users.routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/clients', clientsRoutes);
app.use('/sales', salesRoutes);
app.use('/auth', authRoutes);
app.use('/users', usersRoutes);

app.get('/', (req, res) => {
  res.json({
    message: 'Bookstore API running'
  });
});

app.use('/products', productsRoutes);

export default app;