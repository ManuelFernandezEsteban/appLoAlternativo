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
      email:['',Validators.email],
      privacidad:[false,Validators.requiredTrue],
      mensaje:['',[Validators.required,Validators.minLength(10)]],
    }
  );

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  OnSubmit(){

    this.submitted=true;
    if (!this.formContacto.valid){
      return;
    }
    //TODO mostrar mensajes de error
    //TODO event emiter con formContacto
    console.log(this.formContacto.value,this.formContacto.valid);
    this.formContacto.reset();
    this.submitted=false;
  }


}
