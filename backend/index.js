<<<<<<< HEAD
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
=======
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
import routesEmail from './routes/routesEmail.js';

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api/email', routesEmail);
app.listen(process.env.PORT, () =>
  // db.dbconnection()
  console.log('backend server running on port: ' + process.env.PORT)
);
>>>>>>> a605b69 (Feat: Send email add)
