import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from "@angular/forms";
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { Categoria, Especialidad, Especialidades } from 'src/app/interfaces/especialiadad';
import { DataEspecialidadesService } from 'src/app/services/data-especialidades.service';
import { EspecialistasService } from '../../../services/especialistas.service';
import { Actividades, Actividad, Categorias } from '../../../interfaces/especialiadad';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  categorias:Categoria[];
  submitted: boolean = false;
  especialidades:Actividad[]=[];
  valido:boolean=false;
  formRegistro = this.fb.group(
    {
      nombre: ['manuel', Validators.required],
      apellidos: ['fernandez', Validators.required],
      telefono: ['123456789', Validators.required],
      provincia:['malaga',Validators.required],
      password: ['123456789', [Validators.required,Validators.minLength(8) ]],
      password2: ['123456789', Validators.required],
      email: ['lolo3f@gmail.com', [Validators.required, Validators.email]],
      ActividadeId: [1, Validators.required],
      privacidad: [false, Validators.requiredTrue],
      PlaneId:[1],
      Categorias:[]
    },
  );

 

  constructor(private fb: FormBuilder,
    private especialistasService:EspecialistasService,
    private especialidadesService:DataEspecialidadesService,
    private router:Router ) { }

  ngOnInit(): void {
    this.especialidadesService.getEspecialidades<Actividades>().subscribe(res=>{
      this.especialidades=res.actividades; 
      this.categorias=this.especialidades[0].Categorias_actividades     
    })
  }

  onRegister() {

    this.submitted = true;
    if (!this.formRegistro.valid) {
      this.valido=false;
      return;
    }
    if (!this.camposIguales()){
      
      this.valido=false;
      return;
    }
    this.valido=true;       
    this.submitted = false; 
    console.log(this.formRegistro.value)
     
    this.especialistasService.crearEspecialista(this.formRegistro.value)
      .subscribe(res=>{
        //navegar a la zona privada (selección de plan)
        
        this.router.navigateByUrl('auth/principal/planes');
      },(err)=>{
        Swal.fire('Error',err.error.errors.errors[0].msg,'error');        
      });
  }

  campoNoValido(campo:string):boolean{
    return this.submitted&&this.formRegistro.get(campo).invalid;
  }

  camposIguales():boolean{
    
      const pass1 = this.formRegistro.get('password')?.value || '';
      const pass2 = this.formRegistro.get('password2')?.value || '';
      if (pass1!==pass2){
       this.formRegistro.get('password2')?.setErrors({noIguales:true});
        return false;
      }
        
      return true;
    
  }

  actividadesChange(especialidad_id){
    //console.log( this.especialidades[especialidad_id-1].Categorias_actividades)
    this.categorias=this.especialidades[especialidad_id-1].Categorias_actividades
  }
}
