import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from "@angular/forms";
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  submitted: boolean = false;

  formRegistro = this.fb.group(
    {
      name: ['', Validators.required],
      apellidos: ['', Validators.required],
      telefono: ['', Validators.required],
      password: ['', Validators.required],
      password2: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      especialidad: ['', Validators.required],
      privacidad: [false, Validators.requiredTrue],
    }
  );
  public get password(): boolean {
    return this.formRegistro.get('password')?.invalid || false;
  }
  public get password2(): boolean {
    return this.formRegistro.get('password2')?.invalid || false;
  }
  public get name(): boolean {
    return this.formRegistro.get('name')?.invalid || false;
  }
  public get apellidos(): boolean {
    return this.formRegistro.get('apellidos')?.invalid || false;
  }
  public get email(): boolean {
    return this.formRegistro.get('email')?.invalid || false;
  }
  public get telefono(): boolean {
    return this.formRegistro.get('telefono')?.invalid || false;
  }
  public get especialidad(): boolean {
    return this.formRegistro.get('especialidad')?.invalid || false;
  }
  public get privacidad(): boolean {
    return this.formRegistro.get('privacidad')?.invalid || false;
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onRegister() {

    this.submitted = true;
    if (!this.formRegistro.valid) {
      return;
    }

    //TODO event emiter con formContacto
    console.log(this.formRegistro.value, this.formRegistro.valid);
    this.formRegistro.reset();
    this.submitted = false;
  }
}
