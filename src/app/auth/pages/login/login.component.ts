import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from "@angular/forms";
import { Route, Router } from '@angular/router';
import { UserService } from '../../../services/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  submitted:boolean= false;

  formLogin = this.fb.group(
    {
      password:['123456',Validators.required],
      email:['prueba@prueba.com',[Validators.required, Validators.email]]     
    }
  );
  public get password() : boolean {
    return this.formLogin.get('password')?.invalid || false;
  }
  public get email() : boolean {
    return this.formLogin.get('email')?.invalid || false;
  }
  constructor(private fb:FormBuilder,private http:Router,private userService:UserService) { }

  ngOnInit(): void {
  }

  onLogin(){

    this.submitted=true;
    if (!this.formLogin.valid){
      return;
    }
    const user = this.formLogin.get('email')?.value || '';
    const pass = this.formLogin.get('password')?.value || '';
    this.formLogin.reset();
    this.submitted=false;
  

    const id = this.userService.login(user,pass);

    console.log(id)

    this.http.navigate(['auth/principal',{id}]);

  }

}
