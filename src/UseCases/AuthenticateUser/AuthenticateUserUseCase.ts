import { sign } from 'jsonwebtoken'
import { compare } from 'bcryptjs'
import { AuthenticateUserDTO } from "./AuthenticateUserDTO";
import { IAuthenticateUserRepository } from "./IAuthenticateUserRepository";
import { RefreshToken } from '../../entities/RefreshToken';
import { RefreshTokenDTO } from '../RefreshToken/RefreshTokenDTO';
import { IRefreshTokenRepository } from '../RefreshToken/IRefreshTokenRepository';
class AuthenticateUserUseCase {

  constructor(
    private authenticateUserRepository: IAuthenticateUserRepository,
    private refreshTokenRepository: IRefreshTokenRepository
  ) { }

  async execute(userDTO: AuthenticateUserDTO): Promise<{ access_token: String, refresh_token: RefreshTokenDTO }> {

    const userAlreadyExists = await this.authenticateUserRepository.findByEmail(userDTO.email)
    if (!userAlreadyExists)
    throw new Error('Credentials invalid!')

    const passwordMatch = await compare(userDTO.password, userAlreadyExists.password)
    if (!passwordMatch)
    throw new Error('Credentials invalid!')

    await this.refreshTokenRepository.deleteById(userAlreadyExists.id)

    const refresh_token = new RefreshToken({ expiryIn: 120, user_id: userAlreadyExists.id })

    await this.refreshTokenRepository.save(refresh_token)

    const access_token = sign({}, process.env.JWT_KEY as string, { subject: userAlreadyExists.id, expiresIn: 60 })

    return { access_token, refresh_token }
  }
}

export { AuthenticateUserUseCase }