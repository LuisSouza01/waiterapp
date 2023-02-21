import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import { router } from './router';

dotenv.config();

mongoose.set('strictQuery', false);
mongoose.connect(`${process.env.MONGODB_CONNECT_PATH}`)
  .then(() => {
    const app = express();

    app.use(express.json());
    app.use(router);

    app.listen(3000, () => {
      console.log('Server is running on http://localhost:3000/');
    });
  })
  .catch((err) => console.log('error', err));
