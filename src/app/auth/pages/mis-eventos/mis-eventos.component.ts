import { Component, OnInit } from '@angular/core';
//import { Evento } from '../../../interfaces/eventos';
import { TablaEventosService } from '../../../services/tabla-eventos.service';
import { Evento } from '../../models/user.models';
import { EspecialistasService } from '../../../services/especialistas.service';

@Component({
  selector: 'app-mis-eventos',
  templateUrl: './mis-eventos.component.html',
  styleUrls: ['./mis-eventos.component.scss']
})
export class MisEventosComponent implements OnInit {

  constructor(private tablaEventosService:TablaEventosService,
              public especialistasService:EspecialistasService) { }

  ngOnInit(): void {
  }

  eventoSeleccionado(event:Evento){
    console.log(event);
    this.tablaEventosService.selection(event);
  }
}
