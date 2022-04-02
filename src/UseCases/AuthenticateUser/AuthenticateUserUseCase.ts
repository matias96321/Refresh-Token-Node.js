import { User } from "../../entities/User";
import { sign } from 'jsonwebtoken'
import { compare } from 'bcryptjs'
import { AuthenticateUserDTO } from "./AuthenticateUserDTO";
import { IAuthenticateUserRepository } from "./IAuthenticateUserRepository";

class AuthenticateUserUseCase{
  
  constructor(private authenticateUserRepository: IAuthenticateUserRepository){}

  async execute(userDto: AuthenticateUserDTO): Promise<String>{
    
    const userAlreadyExists = await this.authenticateUserRepository.findByEmail(userDto.email)  
    if(!userAlreadyExists)
    throw new Error('Credentials invalid!')

    const passwordMatch = await compare(userDto.password, userAlreadyExists.password)
    if (!passwordMatch)
    throw new Error('Credentials invalid!')

    const token = sign({}, process.env.JWT_KEY as string, { subject: userAlreadyExists.uuid, expiresIn: '30s' })
    
    return token
  }
}

export { AuthenticateUserUseCase }