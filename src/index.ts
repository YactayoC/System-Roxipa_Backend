import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import htpp from "http";
import { Server as SocketServer } from "socket.io";

import dbConnect from './database/db';
import { authRouter, clientRouter, productRouter } from './routes';

const app = express();
const server = htpp.createServer(app); 
const io = new SocketServer(server, {
  cors : {
    origin: "*",
  },
});
dotenv.config();

app.use(express.json());
app.use(cors());

io.on("connection", (socket) => {
  console.log(socket.id);
  console.log("a user connected");
  socket.on("message", (body) => {
    socket.broadcast.emit("message", {
      body,
      from: socket.id.slice(8),
    });
  });
});






dbConnect(process.env.MONGO_URL as string);

app.use('/api/auth', authRouter);
app.use('/api/client', clientRouter);
app.use('/api/product', productRouter);

server.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
