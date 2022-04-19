import express, { NextFunction, Request, Response } from 'express'
import 'express-async-errors'
import { router } from './routers'

const app = express()
const port = 8000

app.use(express.json())
app.use(router)

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    response.status(401).json({
        status: "Error",
        massage: err.message,
    });
}); 

app.listen(port, ()=>console.log(`http://localhost:${port}/`));
