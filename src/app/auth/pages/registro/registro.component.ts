import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, AbstractControl, ValidationErrors } from "@angular/forms";
import { Router } from '@angular/router';
import { Especialidad, Especialidades } from 'src/app/interfaces/especialiadad';
import { DataEspecialidadesService } from 'src/app/services/data-especialidades.service';
import { Especialista } from '../../models/user.models';
import { DataEspecialistasService } from 'src/app/services/data-especialistas.service';
import { Registro_Especialista } from '../../../interfaces/especialistas';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  submitted: boolean = false;
  especialidades:Especialidad[]=[];

  formRegistro = this.fb.group(
    {
      name: ['Manuel', Validators.required],
      apellidos: ['Fernandez', Validators.required],
      telefono: ['67723977', Validators.required],
      password: ['12345678', [Validators.required,Validators.minLength(8) ]],
      password2: ['12345678', Validators.required],
      email: ['lolo3f@gmail.com', [Validators.required, Validators.email]],
      especialidad: [2, Validators.required],
      privacidad: [true, Validators.requiredTrue],
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

  constructor(private fb: FormBuilder, 
    private especialidadesService:DataEspecialidadesService,
    private http:Router,
    private dataEspecialistasService:DataEspecialistasService) { }

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
    //console.log(this.formRegistro.value, this.formRegistro.valid);
    
    this.submitted = false;
    const especialista:Especialista = new Especialista(
      this.formRegistro.value.name!,this.formRegistro.value.apellidos!,this.formRegistro.value.especialidad!,this.formRegistro.value.email!,this.formRegistro.value.password!,this.formRegistro.value.telefono!) 
    /*const registro:Registro_Especialista={nombre: this.formRegistro.value.name||'',
                                          apellidos: this.formRegistro.value.apellidos||'',
                                          actividad: this.formRegistro.value.especialidad||1,
                                          email: this.formRegistro.value.email||'',
                                          password: this.formRegistro.value.password||'',
                                          telefono:this.formRegistro.value.telefono||'',
                                        };
    console.log(registro);*/
    especialista.fecha_alta=new Date(Date.now()).toDateString();
    //TODO guardar especialista en BD//
    this.dataEspecialistasService.setEspecialista(especialista);
    console.log(this.dataEspecialistasService.especialista);
    this.formRegistro.reset();
    this.http.navigate(['auth/principal/planes']);
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
