import { Injectable } from '@angular/core';
import { Evento } from '../auth/models/user.models';
//import { Evento } from '../interfaces/eventos';

@Injectable({
  providedIn: 'root'
})
export class TablaEventosService {

  private onEventosSelection: boolean = false;
  private eventoSelected: Evento = {
    id: 0,
    evento: '',
    fecha: '',
    precio: 0,
    direccion: '',
    localidad: '',
    provincia: '',
    codigo_postal: '',
    online: false,
    organizador: 0,
    descripcion: '',
    imagen: '',
    telefono: '',
    email: '',
    web: '',    
    pdf:''
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
      id: 0,
      evento: '',
      fecha: fecha,
      precio: 0,
      direccion: '',
      localidad: '',
      provincia: '',
      codigo_postal: '',
      online: false,
      organizador: 0,
      descripcion: '',
      imagen: '',
      telefono: '',
      email: '',
      web: '',      
      pdf:''
    };
  }

}
