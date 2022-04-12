import {v4 as uuid} from 'uuid'

class RefreshToken{
    public readonly id: string;
    public expiryIn: number;
    public user_id: string;

    constructor(props: Omit<RefreshToken, "id" >, id?: string){
        Object.assign(this, props)
        if(!id)
        this.id = uuid()

        let expiryIn = new Date()
        expiryIn.setSeconds(expiryIn.getSeconds() + this.expiryIn)
        this.expiryIn = expiryIn.getTime()

    }

    
}

export { RefreshToken }