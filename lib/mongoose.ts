import mongoose from 'mongoose';

let isConnected = false;
const mongoConnectionUri = process.env.MONGODB_URL;

export const connectToDatabase = async () => {
  mongoose.set('strictQuery', true);

  if (!mongoConnectionUri) {
    throw new Error('Mongo db url is missing');
  }

  if (isConnected) {
    return console.log('MongoDB is already connected');
  }

  try {
    await mongoose.connect(mongoConnectionUri, { dbName: 'devOverflow-db' });
    isConnected = true;
    console.log('MongoDB is connected!');
  } catch (e) {
    throw new Error('Error on trying to connect to the DB.');
  }
};
