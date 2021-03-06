import { User } from "../../entities/User";
import { IUsersRepository } from "../../UseCases/CreateUser/ICreateUserRepository";
import { PrismaClient } from '@prisma/client'
class UsersRepository implements IUsersRepository{
    
    private dataBase = new PrismaClient

    async findByEmail(email: string): Promise<User> {
        const user = await this.dataBase.users.findUnique({where: {email: email}})
        return user
    }

    async save(userDTO: User): Promise<void> {
        await this.dataBase.users.create({data: userDTO})
    }
}

export { UsersRepository }