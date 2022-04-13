import { PrismaClient } from "@prisma/client";
import { User } from "../../entities/User";
import { IAuthenticateUserRepository } from "../../UseCases/AuthenticateUser/IAuthenticateUserRepository";

class AuthenticateRepository implements IAuthenticateUserRepository{

    private dataBase = new PrismaClient() 

    async findByEmail(email: string): Promise<User> {
       return await this.dataBase.users.findFirst({where: {email: email}})
    }
}
export { AuthenticateRepository }