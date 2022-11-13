import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import dbConnect from './database/db';
import { authRouter, clientRouter, productRouter } from './routes';

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());
dbConnect(process.env.MONGO_URL as string);

app.use('/api/auth', authRouter);
app.use('/api/client', clientRouter);
app.use('/api/product', productRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
