import { NextFunction, Request, Response } from "express";
import { verify } from 'jsonwebtoken'

class Auth{
    async handle(request: Request, response: Response, next: NextFunction){
       
        const token = request.header('Authorization').split(' ')[1]
        if(!token)
        return response.status(401).json({message: 'Token not provided'})

        verify(token, process.env.JWT_KEY as string, (err) => {
            if(err)
            return response.status(401).json({message: 'Token invalid'})
            return next()
        })
    }
}

export { Auth }