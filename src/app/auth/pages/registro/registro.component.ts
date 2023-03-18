import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from "@angular/forms";
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { DataEspecialidadesService } from 'src/app/services/data-especialidades.service';
import { EspecialistasService } from '../../../services/especialistas.service';
import { Actividades, Actividad,  Herramienta } from '../../../interfaces/especialidad';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  loading:boolean=false;
  herramientas:Herramienta[];
  submitted: boolean = false;
  especialidades:Actividad[]=[];
  valido:boolean=false;
  formRegistro = this.fb.group(
    {
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      telefono: ['', Validators.required],
      provincia:['',Validators.required],
      password: ['', [Validators.required,Validators.minLength(8) ]],
      password2: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      ActividadeId: [0, Validators.required],
      privacidad: [false, Validators.requiredTrue],
      condiciones: [false, Validators.requiredTrue],
      pais:['',Validators.required],
      no_info_comercial:[false],
      PlaneId:[1],
      UsaHerramientas:[]
    },
  );

 

  constructor(private fb: FormBuilder,
    private especialistasService:EspecialistasService,
    private especialidadesService:DataEspecialidadesService,
    private router:Router ) { }

  ngOnInit(): void {
    this.especialidadesService.getEspecialidades<Actividades>().subscribe(res=>{
      this.especialidades=res.actividades; 
      //this.herramientas=this.especialidades[0].Herramientas;   
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
    this.loading=true;
    this.especialistasService.crearEspecialista(this.formRegistro.value)
      .subscribe(res=>{
        //navegar a la zona privada (selección de plan)
        this.loading=false;
        this.router.navigateByUrl('auth/principal/planes');
      },(err)=>{
        this.loading=false;
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
    this.herramientas=this.especialidades[especialidad_id-1].Herramientas;
  }
}
