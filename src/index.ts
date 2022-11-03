import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRouter from './routes/auth';
import dbConnect from './database/db';

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());
dbConnect(process.env.MONGO_URL as string);

app.use('/api/auth', authRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
