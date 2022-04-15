import { Request, Response } from 'express'
import { RefreshTokenUseCase } from './RefreshTokenUseCase'

class RefreshTokenController {
    constructor(private refreshTokenUseCase: RefreshTokenUseCase) { }
    async handler(request: Request, response: Response) {
        const { refresh_token_id }: { refresh_token_id: string } = request.body
        const { access_token, refresh_token } = await this.refreshTokenUseCase.execute(refresh_token_id)
        return response.status(201).json({ access_token, refresh_token })
    }
}
export { RefreshTokenController } 