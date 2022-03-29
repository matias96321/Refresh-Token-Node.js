import { Request, Response } from 'express'
import { CreateUserUseCase }  from './CreateUserUseCase'
import { ICreateUserUseCase } from './ICreateUserUseCase'

class UserController{
    async CreateUserUseCase(request: Request, response: Response){
        const { name, email, password }: ICreateUserUseCase = request.body
        const createUserCase = new CreateUserUseCase
        const user = await createUserCase.execute({name, email, password})
        response.json({user})
    }
}
export { UserController }