import { User } from "../../entities/User"
interface IAuthenticateUserRepository {
    findByEmail(email: string): Promise<User>
}

export { IAuthenticateUserRepository }