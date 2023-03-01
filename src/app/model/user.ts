export class User{
  id!:number;
  username!:string;
  password!:string;
  avatar!:string;
  address!:string;
  phoneNumber!:string;
  status!:number;


  constructor(id: number, username: string, password: string, avatar: string, address: string, phoneNumber: string, status: number) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.avatar = avatar;
    this.address = address;
    this.phoneNumber = phoneNumber;
    this.status = status;

  }
}
