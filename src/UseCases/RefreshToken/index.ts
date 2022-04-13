import { RefreshTokenRepository } from "../../repositories/implementations/RefreshTokenRepository";
import { RefreshTokenController } from "./RefreshTokenController";
import { RefreshTokenUseCase } from "./RefreshTokenUseCase";

const refreshTokenRepository = new RefreshTokenRepository()
const refreshTokenUseCase = new RefreshTokenUseCase(refreshTokenRepository)
const refreshTokenController = new RefreshTokenController(refreshTokenUseCase)

export { refreshTokenController, refreshTokenUseCase }