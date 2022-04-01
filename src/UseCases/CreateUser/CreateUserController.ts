import { Request, Response } from 'express'
import { ICreateUserDTO } from './CreateUserDTO'
import { CreateUserUseCase }  from './CreateUserUseCase'

class CreateUserController{

    constructor(private createUserUsecase: CreateUserUseCase){}

    async handler(request: Request, response: Response){

        const { name, email, password }: ICreateUserDTO = request.body
        
        await this.createUserUsecase.execute({name, email, password})

        return response.json()

    }
}
export { CreateUserController }