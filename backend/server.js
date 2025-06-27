import express from 'express'
import dotenv from 'dotenv'
import path from 'path';
import { fileURLToPath } from 'url';

import employeeRouter from './routes/employees.js';

// Required for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();

const server = express();
const PORT = process.env.PORT;


server.use(express.static(path.join(__dirname,'dist')))
server.use(express.static(path.join(__dirname, 'public'))); 
server.use(express.json());
  
const loggerMiddleware = (req,res,next)=>{
      console.log(req.url)
}

server.use("/employee",employeeRouter);


server.get("/", (req,res)=>{
  res.send('nothing to say');
})

server.use("/employee",employeeRouter);


server.listen(PORT ,()=>{
    console.log(`Server started at http:localhost:${PORT}`);
})
