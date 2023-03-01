import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../../model/product";
import {User} from "../../model/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http:HttpClient) {
  }

  getAll():Observable<User[]> {
    return this.http.get<User[]>("https://localhost:8080/user/list");
  }

  save(user : User) :Observable<any>{
    return  this.http.post("https://localhost:8080",user)
  }

  lock(id : number) {
    // @ts-ignore
    this.http.post(`https://localhost:8080/lock/${id}`)
  }

  showProfile(id : number) :Observable<any>{
    return  this.http.get(`https://localhost:8080/showProfile/${id}`)
  }

  checkLogin(username: string,password:string) : Observable<any> {
    let user = {
      username : username,
      password : password,
    }
    return this.http.post("https://localhost:8080/login",user)
  }

}
