import { AuthenticateRepository } from "../../repositories/implementations/AuthenticateRepository";
import { RefreshTokenRepository } from "../../repositories/implementations/RefreshTokenRepository";
import { AuthenticateUserController } from "./AuthenticateUserController";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";


const tokenRefreshRepository = new RefreshTokenRepository()
const authenticateRepository = new AuthenticateRepository()

const authenticateUserUseCase = new AuthenticateUserUseCase(authenticateRepository, tokenRefreshRepository);
const authenticateUserController = new AuthenticateUserController(authenticateUserUseCase);

export { authenticateUserController, authenticateUserUseCase }