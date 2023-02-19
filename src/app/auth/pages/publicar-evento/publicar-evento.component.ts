import { Component, OnInit } from '@angular/core';
import { TablaEventosService } from '../../../services/tabla-eventos.service';

import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { ServiceModalEventoService } from '../../../services/service-modal-evento.service';
import { EspecialistasService } from '../../../services/especialistas.service';
import { EventosService } from '../../../services/eventos.service';
import { IEvento } from '../../../interfaces/eventos';
import { Evento } from '../../models/evento.model';
import { FormEventoFiles } from '../../../interfaces/formularioEvento.interface';
import { RespuestaEventos } from '../../../interfaces/eventos-respuesta.interface';
import { RespuestaEvento } from '../../../interfaces/respuestaEvento.interface';
import { UploadsService } from 'src/app/services/uploads.service';

@Component({
  selector: 'app-publicar-evento',
  templateUrl: './publicar-evento.component.html',
  styleUrls: ['./publicar-evento.component.scss']
})
export class PublicarEventoComponent implements OnInit {

  submitted: boolean = false;
  mensaje: string = 'Evento creado';
  imgUrl: string = '';

  evento:Evento = {
    evento: '',
    fecha: '',
    precio: 0,
    email: '',
    web: '',
    online: false,
    direccion: '',
    localidad: '',
    provincia: '',
    codigo_postal: '',
    telefono: '',
    descripcion: '',
    imagen: '',
    pdf: '',
    EspecialistaId: '',
    ActividadeId: 0,
    twitter: '',
    facebook: '',
    instagram: '',
    you_tube: '',
    twich: '',
    id: ''
  }

  constructor(private tablaEventosService: TablaEventosService,
     private route: Router,
    public serviceModalEventoService: ServiceModalEventoService,
    private especialistasService: EspecialistasService,
    private eventosService: EventosService,
    private uploadService:UploadsService) { }

  ngOnInit(): void {
    this.serviceModalEventoService.showDialog = false;

    this.evento ={
      evento: '',
      fecha: '',
      precio: 0,
      email: this.especialistasService.especialista.email, 
      web: this.especialistasService.especialista.web,
      online: false,
      direccion: this.especialistasService.especialista.direccion,
      localidad: this.especialistasService.especialista.localidad,
      provincia: this.especialistasService.especialista.provincia,
      codigo_postal: this.especialistasService.especialista.codigo_postal,
      telefono: this.especialistasService.especialista.telefono,
      descripcion: '', 
      imagen: '',
      pdf: '',
      EspecialistaId: this.especialistasService.especialista.id,
      ActividadeId: this.especialistasService.especialista.ActividadeId,
      twitter: '',
      facebook: '',
      instagram: '',
      you_tube: '',
      twich: '',
      id:''
    }

  }
  desactivarSelected() {
    this.tablaEventosService.setIsSelectedOnFalse();
    this.tablaEventosService.resetEventoSelected();
  }

  onPublic(evento:FormEventoFiles) {
    const {id, ...nuevoEvento}= evento.evento;
    this.eventosService.crearEvento(nuevoEvento).subscribe((res:RespuestaEvento) => {      
      const id = res.evento.id;
      if (evento.files.get('image')){
        const formData = new FormData();
        formData.append("file",evento.files.get('image'));
        this.uploadService.uploadEvento(formData,'eventoImagen',id).subscribe(res=>{

        },err=>{
          Swal.fire('Error',err,'error');
        })
      }
      if (evento.files.get('pdf')){
        const formData = new FormData();
        formData.append("file",evento.files.get('pdf'));
        this.uploadService.uploadEvento(formData,'eventoInfo',id).subscribe(res=>{

        },err=>{
          Swal.fire('Error',err,'error');
        })
      }
      this.submitted = false;
      this.serviceModalEventoService.openDialog();
    }, err => {
      Swal.fire('Error',err.error.msg,'error');
    });
  }

  cerrar() {
    this.serviceModalEventoService.closeDialog();
    this.route.navigate((['auth/principal/']));
  }

  onReset() {
    this.desactivarSelected();
    this.route.navigate((['auth/principal/']))
  }

}

