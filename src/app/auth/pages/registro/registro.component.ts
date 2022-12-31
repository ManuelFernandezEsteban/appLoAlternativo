import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, AbstractControl, ValidationErrors } from "@angular/forms";
import { Router } from '@angular/router';
import { Especialidad, Especialidades } from 'src/app/interfaces/especialiadad';
import { DataEspecialidadesService } from 'src/app/services/data-especialidades.service';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  submitted: boolean = false;
  especialidades:Especialidad[]=[]

  formRegistro = this.fb.group(
    {
      name: ['', Validators.required],
      apellidos: ['', Validators.required],
      telefono: ['', Validators.required],
      password: ['', [Validators.required,Validators.minLength(8) ]],
      password2: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      especialidad: ['', Validators.required],
      privacidad: [false, Validators.requiredTrue],
    },
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

  constructor(private fb: FormBuilder, private especialidadesService:DataEspecialidadesService,private http:Router) { }

  ngOnInit(): void {
    this.especialidadesService.getEspecialidades<Especialidades>().subscribe(res=>{
      this.especialidades=res.especialidades;
    })
  }

  onRegister() {

    this.submitted = true;
    if (!this.formRegistro.valid) {
      return;
    }
    if (!this.camposIguales()){
      this.formRegistro.get('password2')?.setErrors({noIguales:true});
      return;
    }

    //TODO event emiter con formContacto
    console.log(this.formRegistro.value, this.formRegistro.valid);
    this.formRegistro.reset();
    this.submitted = false;

    this.http.navigate(['auth/principal']);
  }


  camposIguales():boolean{
    
      const pass1 = this.formRegistro.get('password')?.value || '';
      const pass2 = this.formRegistro.get('password2')?.value || '';
      if (pass1!==pass2){
       
        return false;
      }else{
        
      }
        
      return true;
    
  }

  actividadesChange(event:Event){
    
  }
}
