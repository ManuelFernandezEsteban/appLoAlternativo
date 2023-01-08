import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Especialidad, Especialidades } from 'src/app/interfaces/especialiadad';
import { Especialista } from '../../models/user.models';
import { DataEspecialidadesService } from 'src/app/services/data-especialidades.service';
import { ServiceModalEventoService } from 'src/app/services/service-modal-evento.service';
import { DataEspecialistasService } from '../../../services/data-especialistas.service';
import { TablaEventosService } from '../../../services/tabla-eventos.service';

@Component({
  selector: 'app-modificar-datos',
  templateUrl: './modificar-datos.component.html',
  styleUrls: ['./modificar-datos.component.scss']
})
export class ModificarDatosComponent implements OnInit {

  especialidades: Especialidad[] = [];

  @ViewChild('imgInput') imgInput!:ElementRef;
  @ViewChild('selectActividad') select!: ElementRef;
  @ViewChild('option') options!: ElementRef[];

  formModificarEspecialista = this.fb.group({
    nombre: ['', Validators.required],
    apellidos: ['', Validators.required],
    fecha_alta: [''],
    descripcion_terapia: ['', Validators.required],
    actividad: [0, Validators.required],
    direccion: '',
    provincia: '',
    localidad: '',
    codigo_postal: '',
    pais: '',
    video: '',
    imagen_terapeuta: [null],
    telefono: ['', Validators.required],
    plan_contratado: [''],
    email: ['', [Validators.required, Validators.email]],
    twitter: '',
    facebook: '',
    instagram: '',
    you_tube: '',
    web: ''
  });

  fechaValue!: Date;
  submitted: boolean = false;
  mensaje: string = 'Cambios guardados';
  imgUrl:string='';
  //especialista!: Especialista;

  constructor(private fb: FormBuilder, private route: Router,
    public dataServiceModal: ServiceModalEventoService,
    private especialidadesService: DataEspecialidadesService,
    public dataEspecialistasService: DataEspecialistasService,
    private renderer: Renderer2,
    private tablaEventos: TablaEventosService,
    public serviceModal: ServiceModalEventoService) { }



    cambiarImg(event: Event){
      
      const file = (event.target as HTMLInputElement).files[0];
      console.log(file)
     /* this.formModificarEspecialista.patchValue({
        imagen_terapeuta:file
      });*/
      this.formModificarEspecialista.get('imagen_terapeuta').updateValueAndValidity();
    
      const reader = new FileReader();
      reader.onload=()=>{
        this.imgUrl=reader.result as string;
      }
      reader.readAsDataURL(file);
    }


  rellenarSelect() {
    this.especialidades.forEach(e => {
      const option = this.renderer.createElement('option');
      this.renderer.addClass(option, 'texto-regular');
      this.renderer.setAttribute(option, 'value', e.id.toString());
      const valor = this.renderer.createText(e.nombre);
      if (e.id == this.dataEspecialistasService.especialista.actividad) {
        this.renderer.setAttribute(option, 'selected', '');
      }
      this.renderer.appendChild(option, valor);
      this.renderer.appendChild(this.select.nativeElement, option);
      
    })
  }

  setEspecialista() {
    this.formModificarEspecialista.get('nombre')?.setValue(this.dataEspecialistasService.especialista.nombre);
    this.formModificarEspecialista.get('apellidos')?.setValue(this.dataEspecialistasService.especialista.apellidos);
    this.formModificarEspecialista.get('descripcion_terapia')?.setValue(this.dataEspecialistasService.especialista.descripcion_terapia||'');
    this.formModificarEspecialista.get('direccion')?.setValue(this.dataEspecialistasService.especialista.direccion||'');
    this.formModificarEspecialista.get('provincia')?.setValue(this.dataEspecialistasService.especialista.provincia||'');
    this.formModificarEspecialista.get('localidad')?.setValue(this.dataEspecialistasService.especialista.localidad||'');
    this.formModificarEspecialista.get('codigo_postal')?.setValue(this.dataEspecialistasService.especialista.codigo_postal||'');
    this.formModificarEspecialista.get('pais')?.setValue(this.dataEspecialistasService.especialista.pais||'');
    this.formModificarEspecialista.get('video')?.setValue(this.dataEspecialistasService.especialista.video||'');
   /* if (this.especialista.imagen_terapeuta===''){
      this.formModificarEspecialista.get('imagen_terapeuta')?.setValue('./../../../../assets/images/imagen_no_disponible.svg.png');
    }*/
    //
    this.formModificarEspecialista.get('telefono')?.setValue(this.dataEspecialistasService.especialista.telefono||'');
    //this.formModificarEspecialista.get('plan_contratado')?.setValue(this.especialista.plan_contratado);
    this.formModificarEspecialista.get('email')?.setValue(this.dataEspecialistasService.especialista.email||'');
    this.formModificarEspecialista.get('twitter')?.setValue(this.dataEspecialistasService.especialista.twitter||'');
    this.formModificarEspecialista.get('facebook')?.setValue(this.dataEspecialistasService.especialista.facebook||'');
    this.formModificarEspecialista.get('you_tube')?.setValue(this.dataEspecialistasService.especialista.you_tube||'');
    this.formModificarEspecialista.get('web')?.setValue(this.dataEspecialistasService.especialista.web||'');
    this.formModificarEspecialista.get('actividad')?.setValue(this.dataEspecialistasService.especialista.actividad);
    
    let arrayFecha = this.dataEspecialistasService.especialista.fecha_alta!.split('-');
    let fecha = arrayFecha[2] + '-' + arrayFecha[1] + '-' + arrayFecha[0];    
    this.fechaValue = new Date(fecha);
    
  }


  ngOnInit(): void {

    this.tablaEventos.resetEventoSelected();
    this.tablaEventos.setIsSelectedOnFalse();
    this.dataServiceModal.showDialog = false;
    this.dataEspecialistasService.especialista;
    this.setEspecialista();
    this.especialidadesService.getEspecialidades<Especialidades>().subscribe(res => {
        this.especialidades = res.especialidades;
        this.rellenarSelect();
      })
   
  }

  actividadesChange(event: Event) {
    console.log(this.formModificarEspecialista.get('actividad')?.value)

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
 /* public get imagen_terapeuta(): boolean {
    return this.formModificarEspecialista.get('imagen_terapeuta')?.invalid || false;
  }*/




  cerrar() {     
    this.serviceModal.closeDialog();
    this.route.navigate(['auth/principal/']);
  }


  onReset() {
    this.submitted=false;
    this.setEspecialista();
    this.rellenarSelect();
    console.log('reset')
  }

  onModify() {
    console.log('cancel')
    this.submitted=true;

    if (!this.formModificarEspecialista.valid){
      console.log(this.formModificarEspecialista.valid,this.formModificarEspecialista.value);
      return
    }
    console.log(this.formModificarEspecialista.valid);
    //this.dataEspecialistasService.setEspecialista(this.especialista);
    
    this.dataEspecialistasService.especialista={
      actividad:this.formModificarEspecialista.value.actividad||1,
      nombre:this.formModificarEspecialista.value.nombre||'',
      email:this.formModificarEspecialista.value.email||'',
      apellidos:this.formModificarEspecialista.value.apellidos||'',
      descripcion_terapia:this.formModificarEspecialista.value.descripcion_terapia||'',
      fecha_alta:this.dataEspecialistasService.especialista.fecha_alta,
      codigo_postal:this.formModificarEspecialista.value.codigo_postal||'',
      direccion:this.formModificarEspecialista.value.direccion||'',
      twitter:this.formModificarEspecialista.value.twitter||'',
      telefono:this.formModificarEspecialista.value.telefono||'',
      instagram:this.formModificarEspecialista.value.instagram||'',
      you_tube:this.formModificarEspecialista.value.you_tube||'',
      web:this.formModificarEspecialista.value.web||'',
      provincia:this.formModificarEspecialista.value.provincia||'',
      localidad:this.formModificarEspecialista.value.localidad||'',
      pais:this.formModificarEspecialista.value.pais||'',
      video:this.formModificarEspecialista.value.video||'',
      imagen_terapeuta:this.formModificarEspecialista.value.imagen_terapeuta||'' ,
      plan_contratado:this.dataEspecialistasService.especialista.plan_contratado
           
    }   
    console.log(this.dataEspecialistasService.especialista);
    this.serviceModal.openDialog();
//    this.dataEspecialistasService.setEspecialista(this.especialista);

  }



  


}


