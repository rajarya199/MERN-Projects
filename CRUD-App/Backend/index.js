import express from 'express'
import dotenv from 'dotenv';
import { connectDb } from './database/db.js';
dotenv.config()
const app=express()
connectDb()
// Middleware to parse JSON
app.use(express.json());


app.get('/', (req, res) => {
  res.send('Server is running...');
});

const PORT =process.env.PORT || 5000;
app.listen(PORT,()=>console.log(`server is running on port ${PORT}`))

