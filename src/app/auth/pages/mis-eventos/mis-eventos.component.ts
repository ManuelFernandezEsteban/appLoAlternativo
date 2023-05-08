import { Component, OnInit } from '@angular/core';
//import { Evento } from '../../../interfaces/eventos';
import { TablaEventosService } from '../../../services/tabla-eventos.service';

import { EspecialistasService } from '../../../services/especialistas.service';
import { Evento } from '../../models/evento.model';

@Component({
  selector: 'app-mis-eventos',
  templateUrl: './mis-eventos.component.html',
  styleUrls: ['./mis-eventos.component.scss']
})
export class MisEventosComponent implements OnInit {

  mostrarEventos:boolean=false;

  constructor(private tablaEventosService:TablaEventosService,
              private especialistasService:EspecialistasService) { }

  ngOnInit(): void {
    if (this.especialistasService.especialista.PlaneId<=1){
      this.mostrarEventos=false;
    }
    else{
      this.mostrarEventos=true;
    }
  }

  eventoSeleccionado(event:Evento){
    
    this.tablaEventosService.selection(event);
  }
}
