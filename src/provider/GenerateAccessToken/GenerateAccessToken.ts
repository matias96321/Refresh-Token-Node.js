import { sign } from "jsonwebtoken";

class GenerateAccessToken{
    constructor(private userId: string){}
    execute(){
        const access_token = sign({}, process.env.JWT_KEY as string, { subject: this.userId, expiresIn: 60 })
        return access_token
    }
}
export { GenerateAccessToken }