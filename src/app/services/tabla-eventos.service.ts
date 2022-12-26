import { Injectable } from '@angular/core';
import { Evento } from '../interfaces/eventos';

@Injectable({
  providedIn: 'root'
})
export class TablaEventosService {

  private onEventosSelection:boolean=false;
  private eventoSelected:Evento={
    id: 0,
    evento: '',
    fecha: '',
    precio: 0,
    direccion: '',
    localidad: '',
    provincia: '',
    codigo_postal: '',
    online: false,
    organizador: '',
    descripcion: '',
    imagen: '',
    telefono: '',
    email: '',
    web: '',
    twitter: '',
    facebook: '',
    instagram: '',
    you_tube: '',
    twich: ''
  };

  constructor() { }

  eventoSeleccionado(){
    this.onEventosSelection=true;
  }

  selection(evento:Evento){
    this.eventoSelected=evento;
    this.onEventosSelection=true;
  }

  isSelected():boolean{
    return this.onEventosSelection;
  }
  getEventoSelected():Evento{
    return this.eventoSelected;
  }

}
