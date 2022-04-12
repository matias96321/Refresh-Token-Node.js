import {v4 as uuid} from 'uuid'
class User{
  
  public readonly id: string; 
  public name: string; 
  public password: string;
  public email: string; 
  public date: string; // me lembrar de tirar !!!!!!!!

  constructor(props: Omit<User, "id" | 'date'>, id?: string){
    Object.assign(this, props)
    
    if(!this.id){
      this.id = uuid()
      const date = new Date
      this.date = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`
    }
  }
}

export { User }