import { hash } from 'bcryptjs'
import { IUsersRepository } from './ICreateUserRepository'
import { CreateUserDTO } from './CreateUserDTO'
import { User } from '../../entities/User'
class CreateUserUseCase {

    constructor(private usersRepository: IUsersRepository) { }

    async execute(userDTO: CreateUserDTO) {

        const findUser = await this.usersRepository.findByEmail(userDTO.email)

        if (findUser)
        throw new Error("Email already registered!")

        userDTO.password = await hash(userDTO.password, 10)

        await this.usersRepository.save(new User(userDTO))
    }
}
export { CreateUserUseCase }