import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { TablaEventosService } from 'src/app/services/tabla-eventos.service';
import { ServiceModalEventoService } from 'src/app/services/service-modal-evento.service';

import { Evento } from '../../models/evento.model';
import { EventosService } from '../../../services/eventos.service';

@Component({
  selector: 'app-eliminar-evento',
  templateUrl: './eliminar-evento.component.html',
  styleUrls: ['./eliminar-evento.component.scss']
})
export class EliminarEventoComponent implements OnInit {

  mensaje: string = '¿Seguro qué desea borrar el evento?';

  hayPDF: boolean = false;
  eventoSeleccionado: Evento = {
    id: '',
    evento: '',
    fecha: '',
    precio: 0,
    direccion: '',
    localidad: '',
    provincia: '',
    codigo_postal: '',
    online: false,
    EspecialistaId: '',
    descripcion: '',
    imagen: '',
    telefono: '',
    email: '',
    web: '',
    pdf: '',
    twitter: '',
    facebook: '',
    instagram: '',
    you_tube: '',
    twich: '',
    ActividadeId: 0
  };
  fechaValue!: Date;
  formEliminarEvento = this.fb.group({
    evento: [''],
    fecha: [''],
    precio: [0],
    email: [''],
    web: [''],
    online: [],
    direccion: [''],
    poblacion: [''],
    provincia: [''],
    cp: [''],
    telefono: [''],
    descripcion: [''],
    img: [''],
    pdf: [''],
    id: [''],
    EspecialistaId: [''],
    ActividadeId: 0,
    twitter: [''],
    facebook: [''],
    instagram: [''],
    you_tube: [''],
    twich: ['']
  })

  constructor(private tablaEventosService: TablaEventosService,
    private fb: FormBuilder,
    private route: Router,
    public serviceModal: ServiceModalEventoService,
    private eventosService: EventosService
  ) {

  }

  ngOnInit(): void {
    this.serviceModal.showDialog = false;
    this.eventoSeleccionado = this.tablaEventosService.getEventoSelected();
    this.formEliminarEvento = this.fb.group({
      evento: [this.eventoSeleccionado.evento],
      fecha: [''],
      precio: [this.eventoSeleccionado.precio],
      email: [this.eventoSeleccionado.email],
      web: [this.eventoSeleccionado.web],
      online: [this.eventoSeleccionado.online],
      direccion: [this.eventoSeleccionado.direccion],
      poblacion: [this.eventoSeleccionado.localidad],
      provincia: [this.eventoSeleccionado.provincia],
      cp: [this.eventoSeleccionado.codigo_postal],
      telefono: [this.eventoSeleccionado.telefono],
      descripcion: [this.eventoSeleccionado.descripcion],
      img: [''],
      pdf: [this.eventoSeleccionado.pdf],
      id: [this.eventoSeleccionado.id],
      EspecialistaId: [this.eventoSeleccionado.EspecialistaId],
      ActividadeId: [this.eventoSeleccionado.ActividadeId],
      twitter: [this.eventoSeleccionado.twitter],
      facebook: [this.eventoSeleccionado.facebook],
      instagram: [this.eventoSeleccionado.instagram],
      you_tube: [this.eventoSeleccionado.you_tube],
      twich: [this.eventoSeleccionado.twich]
    })

    let arrayFecha = this.eventoSeleccionado.fecha.split('-');
    let fecha = arrayFecha[0] + '-' + arrayFecha[1] + '-' + arrayFecha[2];
    this.formEliminarEvento.get('fecha')?.setValue(fecha);
  }


  ocultar(): string {
    if (this.eventoSeleccionado.pdf) {
      return '';
    }
    else {
      return 'ocultar';
    }
  }
  desactivarSelected() {
    this.tablaEventosService.setIsSelectedOnFalse();
    this.tablaEventosService.resetEventoSelected();
  }
  async onDelete() {
    await this.serviceModal.openDialog().then(res => {

    });


  }

  cerrar() {    

    this.eventosService.eliminarEvento(this.eventoSeleccionado.id)
      .subscribe(res => {
        this.formEliminarEvento.reset();
        this.serviceModal.closeDialog();
        this.route.navigate(['auth/principal/']);
      }, err => {
        Swal.fire('Error',err.error.msg,'error');
      });

  }

  onReset() {
    this.desactivarSelected();
    this.route.navigate(['auth/principal/']);
  }


}
