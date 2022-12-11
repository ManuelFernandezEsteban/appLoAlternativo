import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from "@angular/forms";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  submitted:boolean= false;

  formLogin = this.fb.group(
    {
      password:['',Validators.required],
      email:['',[Validators.required, Validators.email]]     
    }
  );
  public get password() : boolean {
    return this.formLogin.get('password')?.invalid || false;
  }
  public get email() : boolean {
    return this.formLogin.get('email')?.invalid || false;
  }
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  onLogin(){

    this.submitted=true;
    if (!this.formLogin.valid){
      return;
    }
   
    //TODO event emiter con formContacto
    console.log(this.formLogin.value,this.formLogin.valid);
    this.formLogin.reset();
    this.submitted=false;
  }

}
