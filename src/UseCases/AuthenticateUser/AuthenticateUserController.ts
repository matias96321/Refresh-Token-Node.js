import { Request, Response } from 'express'
import { AuthenticateUserDTO } from "./AuthenticateUserDTO";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

class AuthenticateUserController {
    constructor(private authenticateUserUseCase: AuthenticateUserUseCase ) { }

    async handler(request: Request, response: Response) {

        const { email, password }: AuthenticateUserDTO = request.body

        const token = await this.authenticateUserUseCase.execute({ email, password })

        return response.json({token})
    }
}

export { AuthenticateUserController }