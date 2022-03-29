import { client } from '../../prisma/client'
import { hash } from 'bcryptjs'
import { IUserRequest } from '../../Interfaces/User/IUserRequest'

class CreateUserUseCase {
    async execute({ name, email, password }: IUserRequest){
        let findUser = await client.users.findFirst({ where: {email}})
        if(findUser){
            throw new Error("Email already registered!")
        }
        const passwordEncrypted = await hash(password,10)
        const newUser = await client.users.create({data:{name, email, password: passwordEncrypted}} ) 
        return newUser
    }
}
export { CreateUserUseCase }