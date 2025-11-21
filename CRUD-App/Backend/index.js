import express from 'express'
import dotenv from 'dotenv';
import userRoutes from './routes/route.js'
import { connectDb } from './database/db.js';
import cors from 'cors'
import bodyParser from 'body-parser';
dotenv.config()
const app=express()
connectDb()
app.use(cors())
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
// Middleware to parse JSON
app.use(express.json());

app.use('/',userRoutes)

app.get('/', (req, res) => {
  res.send('Server is running...');
});

const PORT =process.env.PORT || 5000;
app.listen(PORT,()=>console.log(`server is running on port ${PORT}`))

