import {Component, OnInit} from '@angular/core';
import {LoginService} from "../service/login/loginService";
import {HttpClient} from "@angular/common/http";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../model/user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  formRegister! :FormGroup;
  user : User | undefined;
  constructor(private registerService:LoginService,private http:HttpClient,private router:Router) {
  }

  ngOnInit() {
    this.formRegister = new FormGroup({
      id:new FormControl(0),
      username: new FormControl("",Validators.required),
      password: new FormControl("",Validators.minLength(6)),
      avatar : new FormControl(""),
      address : new FormControl("",Validators.required),
      phoneNumber: new FormControl("",[Validators.required,Validators.minLength(9)]),
      status : new FormControl(1),
    })
  }

  register(){
    this.user = this.formRegister.value
    console.log(this.user)
    this.registerService.register(this.formRegister.value).subscribe(()=>{
      alert("create ok");
      console.log(this.formRegister.value)
      this.router.navigate(["/login"]);
    })
  }
}
