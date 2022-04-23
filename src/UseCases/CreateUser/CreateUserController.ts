import { Request, Response } from 'express'
import { CreateUserDTO } from './CreateUserDTO'
import { CreateUserUseCase } from './CreateUserUseCase'

class CreateUserController {

    constructor(private createUserUsecase: CreateUserUseCase) { }

    async handler(request: Request, response: Response) {

        const { name, email, password }: CreateUserDTO = request.body

        await this.createUserUsecase.execute({ name, email, password })

        return response.status(201).json({})
    }
}

export { CreateUserController }