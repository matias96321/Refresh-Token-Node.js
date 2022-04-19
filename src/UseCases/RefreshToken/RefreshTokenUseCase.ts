import { RefreshToken } from "../../entities/RefreshToken";
import { GenerateAccessToken } from "../../provider/GenerateAccessToken/GenerateAccessToken";
import { IRefreshTokenRepository } from "./IRefreshTokenRepository";

class RefreshTokenUseCase{

    constructor(private refreshTokenRepository: IRefreshTokenRepository){}    

    async execute(refresh_token_id: string){
        
        const refreshTokenExists = await this.refreshTokenRepository.findByRefreshToken(refresh_token_id)

        if(!refreshTokenExists)
        throw new Error("Invalid refresh token");

        if (refreshTokenExists.expiryIn > new Date().getTime())
        return { access_token:  new GenerateAccessToken(refreshTokenExists.user_id).execute() }
            
        await this.refreshTokenRepository.deleteById(refreshTokenExists.user_id)
        
        const refresh_token = await this.refreshTokenRepository.save( new RefreshToken({ expiryIn: 60, user_id: refreshTokenExists.user_id }) )

        const access_token = new GenerateAccessToken(refreshTokenExists.user_id).execute()

        return { access_token, refresh_token }
    }
}

export { RefreshTokenUseCase }