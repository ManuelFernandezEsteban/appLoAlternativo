import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Especialidad, Especialidades } from 'src/app/interfaces/especialiadad';

import { DataEspecialidadesService } from 'src/app/services/data-especialidades.service';
import { ServiceModalEventoService } from 'src/app/services/service-modal-evento.service';
import { TablaEventosService } from '../../../services/tabla-eventos.service';
import { EspecialistasService } from '../../../services/especialistas.service';

import { RespuestaEspecialista } from 'src/app/interfaces/respuesta-especialista.interface';
import { Actividad, Actividades } from '../../../interfaces/especialiadad';

@Component({
  selector: 'app-modificar-datos',
  templateUrl: './modificar-datos.component.html',
  styleUrls: ['./modificar-datos.component.scss']
})
export class ModificarDatosComponent implements OnInit {

  especialidades: Actividad[] = [];

  @ViewChild('imgInput') imgInput!: ElementRef;
  @ViewChild('selectActividad') select!: ElementRef;
  @ViewChild('option') options!: ElementRef[];

  formModificarEspecialista = this.fb.group({
    nombre: [this.especialistasService.especialista.nombre, Validators.required],
    apellidos: [this.especialistasService.especialista.apellidos, Validators.required],
    fecha_alta: [this.especialistasService.especialista.fecha_alta],
    descripcion_terapia: [this.especialistasService.especialista.descripcion_terapia, Validators.required],
    ActividadeId: [this.especialistasService.especialista.ActividadeId, Validators.required],
    direccion: this.especialistasService.especialista.direccion,
    provincia: this.especialistasService.especialista.provincia,
    localidad: this.especialistasService.especialista.localidad,
    codigo_postal: this.especialistasService.especialista.codigo_postal,
    pais: this.especialistasService.especialista.pais,
    video: [null],
    imagen_terapeuta: [null],
    telefono: [this.especialistasService.especialista.telefono, Validators.required],
    PlaneId: [this.especialistasService.especialista.PlaneId],
    email: [this.especialistasService.especialista.email, [Validators.required, Validators.email]],
    twitter: this.especialistasService.especialista.twitter,
    facebook: this.especialistasService.especialista.facebook,
    instagram: this.especialistasService.especialista.instagram,
    you_tube: this.especialistasService.especialista.you_tube,
    web: this.especialistasService.especialista.web,
    id:this.especialistasService.especialista.id,
  });

  fechaValue!: Date;
  submitted: boolean = false;
  mensaje: string = 'Cambios guardados';
  imgUrl: string = '';

  constructor(private fb: FormBuilder,
    private route: Router,
    public especialistasService: EspecialistasService,
    public dataServiceModal: ServiceModalEventoService,
    private especialidadesService: DataEspecialidadesService,
    private renderer: Renderer2,
    private tablaEventos: TablaEventosService,
    public serviceModal: ServiceModalEventoService) { }



  cambiarImg(event: Event) {

    const file = (event.target as HTMLInputElement).files[0];
    this.formModificarEspecialista.get('imagen_terapeuta').updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imgUrl = reader.result as string;
    }
    reader.readAsDataURL(file);
  }
  cambiarVideo(event:Event){

  }

  rellenarSelect() {
    this.especialidades.forEach(e => {
      const option = this.renderer.createElement('option');
      this.renderer.addClass(option, 'texto-regular');
      this.renderer.setAttribute(option, 'value', e.id.toString());
      const valor = this.renderer.createText(e.nombre);
      if (e.id == this.especialistasService.especialista.ActividadeId) {
        this.renderer.setAttribute(option, 'selected', '');
      }
      this.renderer.appendChild(option, valor);
      this.renderer.appendChild(this.select.nativeElement, option);
    })
  }
  ngOnInit(): void {

    
    //console.log(this.especialistasService.especialista)

    this.tablaEventos.resetEventoSelected();
    this.tablaEventos.setIsSelectedOnFalse();
    this.dataServiceModal.showDialog = false;
    this.formModificarEspecialista = this.fb.group({
      nombre: [this.especialistasService.especialista.nombre, Validators.required],
      apellidos: [this.especialistasService.especialista.apellidos, Validators.required],
      fecha_alta: [this.especialistasService.especialista.fecha_alta],
      descripcion_terapia: [this.especialistasService.especialista.descripcion_terapia, Validators.required],
      ActividadeId: [this.especialistasService.especialista.ActividadeId, Validators.required],
      direccion: this.especialistasService.especialista.direccion,
      provincia: this.especialistasService.especialista.provincia,
      localidad: this.especialistasService.especialista.localidad,
      codigo_postal: this.especialistasService.especialista.codigo_postal,
      pais: this.especialistasService.especialista.pais,
      video: [null],
      imagen_terapeuta: [null],
      telefono: [this.especialistasService.especialista.telefono, Validators.required],
      PlaneId: [this.especialistasService.especialista.PlaneId],
      email: [this.especialistasService.especialista.email, [Validators.required, Validators.email]],
      twitter: this.especialistasService.especialista.twitter,
      facebook: this.especialistasService.especialista.facebook,
      instagram: this.especialistasService.especialista.instagram,
      you_tube: this.especialistasService.especialista.you_tube,
      web: this.especialistasService.especialista.web,
      id:this.especialistasService.especialista.id,
    });
    this.especialidadesService.getEspecialidades<Actividades>()
      .subscribe(res => {
      this.especialidades = res.actividades;
      this.rellenarSelect();
    })    
    this.fechaValue = new Date(this.especialistasService.especialista.fecha_alta);    
    this.imgUrl = this.especialistasService.especialista.imagen_terapeuta;
  }

  campoNoValido(campo: string): boolean {
    return this.submitted && this.formModificarEspecialista.get(campo).invalid;
  }

  cerrar() {
    this.serviceModal.closeDialog();
    this.route.navigate(['auth/principal/']);
  }


  onReset() {
    this.submitted = false;
    //this.setEspecialista();
    this.rellenarSelect();

  }

  onModify() {

    this.submitted = true;

    if (!this.formModificarEspecialista.valid) {

      return
    }
    this.especialistasService.actualizarEspecialista(this.formModificarEspecialista.value)
    .subscribe((res:RespuestaEspecialista)=>{
      console.log(res);
      //this.especialistasService.especialista=res
      this.serviceModal.openDialog();
    },error=>{
      console.log(error);
    });
    
  }






}


