import { RefreshToken } from "../../entities/RefreshToken";
import { RefreshTokenDTO } from "./RefreshTokenDTO";

interface IRefreshTokenRepository {
    save(data: RefreshTokenDTO): Promise<RefreshToken>;
    findById(refreshTokenId: string): Promise<RefreshToken>;
    deleteById(userId: string): Promise<{}>;
}

export { IRefreshTokenRepository }