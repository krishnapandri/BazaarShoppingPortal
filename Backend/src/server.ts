import express, { Request, Response, NextFunction } from 'express';
import router, { CommonResponse } from './Routes/routes';
import { AppDataSource } from './data-source';
import bodyParser from 'body-parser';
import { CloudinaryUtils } from './Utils/CloudinaryUtil';
import { WritetoErrorFile } from './Utils/ErrorLogUtils';
require('dotenv').config();
const app = express();
const port = process.env.PORT;
import cors from 'cors'
// Middleware to parse JSON and urlencoded request bodies
app.use(cors({ origin: "http://localhost:5173", credentials: true }))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(router);
app.use(express.static('uploads'));


/* app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true })); */

CloudinaryUtils();

(async () => {
    try {
      // if(!AppDataSource.isInitialized)
        await AppDataSource.initialize();
        //await AppDataSource.synchronize();
        await AppDataSource.runMigrations();
      console.log('Data Source has been initialized!');
    } catch (err) {
      console.error('Error during Data Source initialization:', err);
      process.exit(1); // Exit if the database is not initialized
    }
  })();

// A simple route
app.get('/', (req: Request, res: Response,next:NextFunction) => {
  res.send(new CommonResponse("Hello World!!",true));
});
/* app.get('/krishna', (req: Request, res: Response,next:NextFunction) => {
  res.send("Hello World!!");
}); */

// Error handling middleware
app.use(async (err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    await WritetoErrorFile(err,'Error MiddleWare','','');
    res.status(500).send(new CommonResponse("",false,err.message));
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
