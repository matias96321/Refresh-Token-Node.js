import {v4 as uuidv4} from 'uuid'

class User{
  
  public readonly uuid: string; 
  public name: string; 
  public password: string;
  public email: string; 
  public date: string; // me lembrar de tirar !!!!!!!!

  constructor(props: Omit<User, "uuid" | 'date'>, uuid?: string){
    Object.assign(this, props)
    
    if(!this.uuid){
      this.uuid = uuidv4()
      const date = new Date
      this.date = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`
    }
  }
}

export { User }