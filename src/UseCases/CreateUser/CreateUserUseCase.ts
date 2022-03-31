import { hash } from 'bcryptjs'
import { IUsersRepository } from './ICreateUserRepository'
import { ICreateUserDTO } from './CreateUserDTO'
import { User } from '../../entities/User'

class CreateUserUseCase {

    constructor(private usersRepository: IUsersRepository){}

    async execute(data: ICreateUserDTO){
        
        const findUser = await this.usersRepository.findByEmail(data.email)

        if(findUser){
            throw new Error("Email already registered!")
        }

        data.password = await hash(data.password,10)

        const user = new User(data)
        
        await this.usersRepository.save(user)
    }
}
export { CreateUserUseCase }