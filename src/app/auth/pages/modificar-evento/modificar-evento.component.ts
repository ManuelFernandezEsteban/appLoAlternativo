import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TablaEventosService } from 'src/app/services/tabla-eventos.service';
import { Router } from '@angular/router';
import { ServiceModalEventoService } from 'src/app/services/service-modal-evento.service';
import { Evento } from '../../models/evento.model';
import { EventosService } from '../../../services/eventos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modificar-evento',
  templateUrl: './modificar-evento.component.html',
  styleUrls: ['./modificar-evento.component.scss']
})
export class ModificarEventoComponent implements OnInit {

  submitted: boolean = false;
  fechaValue!: Date;
  mensaje: string = 'Evento modificado';
  imgUrl: string = '';

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

  formModificarEvento = this.fb.group({
    evento: ['', Validators.required],
    fecha: ['', Validators.required],
    precio: [0, Validators.required],
    email: ['', [Validators.required, Validators.email]],
    web: [''],
    online: [false],
    direccion: [''],
    poblacion: [''],
    provincia: [''],
    cp: [''],
    telefono: ['', Validators.required],
    descripcion: ['', [Validators.required, Validators.minLength(10)]],
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
    public dataServiceModal: ServiceModalEventoService,
    private eventosService: EventosService) {
    this.eventoSeleccionado = this.tablaEventosService.getEventoSelected();
  }

  ngOnInit(): void {
    this.dataServiceModal.showDialog = false;
    this.eventoSeleccionado = this.tablaEventosService.getEventoSelected();
    console.log(this.eventoSeleccionado);
    this.formModificarEvento = this.fb.group({
      evento: [this.eventoSeleccionado.evento, Validators.required],
      fecha: ['', Validators.required],
      precio: [this.eventoSeleccionado.precio, Validators.required],
      email: [this.eventoSeleccionado.email, [Validators.required, Validators.email]],
      web: [this.eventoSeleccionado.web],
      online: [this.eventoSeleccionado.online],
      direccion: [this.eventoSeleccionado.direccion],
      poblacion: [this.eventoSeleccionado.localidad],
      provincia: [this.eventoSeleccionado.provincia],
      cp: [this.eventoSeleccionado.codigo_postal],
      telefono: [this.eventoSeleccionado.telefono, Validators.required],
      descripcion: [this.eventoSeleccionado.descripcion, [Validators.required, Validators.minLength(10)]],
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
    this.formModificarEvento.get('fecha')?.setValue(fecha);
  }

  campoNoValido(campo: string): boolean {
    return this.submitted && this.formModificarEvento.get(campo).invalid;
  }

  desactivarSelected() {
    this.tablaEventosService.setIsSelectedOnFalse();
    this.tablaEventosService.resetEventoSelected();
  }

  onModify() {

    this.submitted = true;
    if (!this.formModificarEvento.valid) {
      return;
    }
    this.eventosService.actualizarEvento(this.formModificarEvento.value)
      .subscribe(res => {
        this.formModificarEvento.reset();
        this.submitted = false;
        this.desactivarSelected();
        this.dataServiceModal.openDialog();
      }, err => {
        Swal.fire('Error',err.error.msg,'error');
      });
  }

  cerrar() {
    this.dataServiceModal.closeDialog();
    this.route.navigate((['auth/principal/']))
  }

  onReset() {
    this.desactivarSelected();
    this.route.navigate((['auth/principal/']))
  }

  cambiarImg(event: Event) {

    const file = (event.target as HTMLInputElement).files[0];
    console.log(file)

    this.formModificarEvento.get('img').updateValueAndValidity();

    const reader = new FileReader();
    reader.onload = () => {
      this.imgUrl = reader.result as string;
    }
    reader.readAsDataURL(file);
  }


}
