<<<<<<< HEAD
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/routesEmail.js";
dotenv.config();
=======
import 'dotenv/config.js';
import express from 'express';
import cors from 'cors';

import routesEmail from './routes/routesEmail.js';
>>>>>>> c8d9d91 (Fix: dotenv config fix)

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/email", router);
app.listen(process.env.PORT, () =>
  console.log("Backend server running on port: ", process.env.PORT)
);
