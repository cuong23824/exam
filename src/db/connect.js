import mongoose from 'mongoose';

export class Database {
  constructor() {
    mongoose
      .connect('mongodb://localhost:27017/t2210m')
      .then(() => console.log('Database Connected!'))
      .catch((err) => {
        console.error('Database connection error');
      });
  }
}