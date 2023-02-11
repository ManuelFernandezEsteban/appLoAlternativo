import { Injectable } from '@angular/core';
import { Evento } from '../auth/models/evento.model';

@Injectable({
  providedIn: 'root'
})
export class TablaEventosService {

  private onEventosSelection: boolean = false;
  private eventoSelected: Evento = {
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

  constructor() { }

  eventoSeleccionado() {
    this.onEventosSelection = true;
  }

  selection(evento: Evento) {
    this.eventoSelected = evento;
    this.onEventosSelection = true;
  }

  isSelected(): boolean {
    return this.onEventosSelection;
  }
  getEventoSelected(): Evento {
    return this.eventoSelected;
  }

  setIsSelectedOnFalse() {
    this.onEventosSelection = false;
  }
  resetEventoSelected() {
    let fecha = Date.now().toLocaleString();
    this.eventoSelected = {
      id: '',
      evento: '',
      fecha: fecha,
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
  }

}
