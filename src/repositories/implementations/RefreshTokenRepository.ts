import { PrismaClient } from "@prisma/client";
import { RefreshToken } from "../../entities/RefreshToken";
import { RefreshTokenDTO } from "../../UseCases/RefreshToken/RefreshTokenDTO";
import { IRefreshTokenRepository } from "../../UseCases/RefreshToken/IRefreshTokenRepository";

class RefreshTokenRepository implements IRefreshTokenRepository{

    private dataBase = new PrismaClient 

    async findById(refreshTokenId: string): Promise<RefreshToken> {
        return await this.dataBase.refreshToken.findFirst({where: {id: refreshTokenId}})
    }

    async save(refreshTokenDTO: RefreshTokenDTO): Promise<RefreshToken> {
        return await this.dataBase.refreshToken.create({data: refreshTokenDTO})
    }

    async deleteById(userId: string) {
        return await this.dataBase.refreshToken.deleteMany({where: {user_id: userId}})
    }
}

export { RefreshTokenRepository }