import 'dotenv/config';
import express from 'express';
import routes from './routes/productsRoute';

const app = express();

app.use(express.json());

app.use('/products', routes);

export default app;
