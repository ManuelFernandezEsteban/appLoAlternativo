import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  submitted:boolean= false;

  formContacto = this.fb.group(
    {
      name:['',Validators.required],
      email:['',[Validators.required, Validators.email]],
      privacidad:[false,Validators.requiredTrue],
      mensaje:['',[Validators.required,Validators.minLength(10)]],
    }
  );

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  
  public get name() : boolean {
    return this.formContacto.get('name')?.invalid || false;
  }
  public get email() : boolean {
    return this.formContacto.get('email')?.invalid || false;
  }
  public get privacidad() : boolean {
    return this.formContacto.get('privacidad')?.invalid || false;
  }
  public get mensaje() : boolean {
    return this.formContacto.get('mensaje')?.invalid || false;
  }

  onSubmit(){

    this.submitted=true;
    if (!this.formContacto.valid){
      return;
    }
   
    //TODO event emiter con formContacto
    console.log(this.formContacto.value,this.formContacto.valid);
    this.formContacto.reset();
    this.submitted=false;
  }
}
