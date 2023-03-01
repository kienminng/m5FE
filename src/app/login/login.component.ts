import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Observable} from "rxjs";
import {UserService} from "../service/login/UserService";
import {LoginService} from "../service/login/loginService";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  fromLogin: FormGroup = new FormGroup({
    username : new FormControl(""),
    password : new FormControl(""),
  })

  constructor(private loginService: LoginService,private router:Router) {
  }

  login() {
    this.loginService.login(this.fromLogin.value).subscribe((data) =>{
      this.loginService.setUserToken(data);
      this.loginService.setToken(data.token)
      this.router.navigate(["/home"])
    })
  }
}
