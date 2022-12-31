import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Especialidad, Especialidades } from 'src/app/interfaces/especialiadad';
import { Especialista, Especialistas } from 'src/app/interfaces/especialistas';
import { DataEspecialidadesService } from 'src/app/services/data-especialidades.service';
import { ServiceModalEventoService } from 'src/app/services/service-modal-evento.service';
import { DataEspecialistasService } from '../../../services/data-especialistas.service';
import { pipe, filter } from 'rxjs';

@Component({
  selector: 'app-modificar-datos',
  templateUrl: './modificar-datos.component.html',
  styleUrls: ['./modificar-datos.component.scss']
})
export class ModificarDatosComponent implements OnInit {

  especialidades:Especialidad[]=[];
  

  formModificarEspecialista=this.fb.group({
    nombre:['',Validators.required],
    apellidos:['',Validators.required],
    fecha_alta:[''],
    descripcion_terapia:['',Validators.required],
    actividad: ['',Validators.required],
    direccion: '',
    provincia: '',
    localidad: '',
    codigo_postal: '',
    pais: '',
    video: '',
    imagen_terapeuta: ['',Validators.required],
    telefono: ['',Validators.required],
    plan_contratado: [''],    
    email: ['',[Validators.required,Validators.email]],
    twitter: '',
    facebook: '',
    instagram: '',
    you_tube: '',
    web: ''
  })
  fechaValue!:Date;
  submitted:boolean=false;
  mensaje:string='Cambios guardados';
  especialista:Especialista={
    id: 0,
    nombre: '',
    apellidos: '',
    fecha_alta: '',
    descripcion_terapia: '',
    actividad: '',
    direccion: '',
    provincia: '',
    localidad: '',
    codigo_postal: '',
    pais: '',
    video: '',
    imagen_terapeuta: '',
    telefono: '',
    plan_contratado: '',
    token_pago: '',
    email: '',
    twitter: '',
    facebook: '',
    instagram: '',
    you_tube: '',
    web: ''
  };

  constructor(private fb:FormBuilder,private route:Router , 
    public dataServiceModal:ServiceModalEventoService,
    private especialidadesService:DataEspecialidadesService,
    private dataEspecialistasService:DataEspecialistasService) { }

  ngOnInit(): void {
    this.dataServiceModal.showDialog=false;
    this.especialidadesService.getEspecialidades<Especialidades>().subscribe(res=>{
      this.especialidades=res.especialidades;
    });  
    
    this.dataEspecialistasService.getEspecialistas<Especialistas>().subscribe(res=>{
      this.especialista=res.especialistas[1];
      console.log(this.especialista);
      let arrayFecha = this.especialista.fecha_alta.split('-');
      let fecha = arrayFecha[2]+'-'+arrayFecha[1]+'-'+arrayFecha[0];   
      this.fechaValue= new Date (fecha);
    })
  }

  actividadesChange(event:Event){
    console.log(this.formModificarEspecialista.get('actividad'))
  }

  public get nombre(): boolean {
    return this.formModificarEspecialista.get('nombre')?.invalid || false;
  }
  public get apellidos(): boolean {
    return this.formModificarEspecialista.get('apellidos')?.invalid || false;
  }
  public get descripcion_terapia(): boolean {
    return this.formModificarEspecialista.get('descripcion_terapia')?.invalid || false;
  }
  public get email(): boolean {
    return this.formModificarEspecialista.get('email')?.invalid || false;
  }
  public get telefono(): boolean {
    return this.formModificarEspecialista.get('telefono')?.invalid || false;
  }
  public get actividad(): boolean {
    return this.formModificarEspecialista.get('actividad')?.invalid || false;
  }
  public get imagen_terapeuta(): boolean {
    return this.formModificarEspecialista.get('imagen_terapeuta')?.invalid || false;
  }
  



  cerrar(){}


  onReset(){

  }

  onModify(){

  }

}
