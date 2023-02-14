import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

mongoose.set('strictQuery', false);
mongoose.connect(`mongodb://${process.env.MONGODB_CONNECT_PATH}`)
  .then(() => console.log('mongoDB connect'))
  .catch((err) => console.log('error', err));

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000/');
});
