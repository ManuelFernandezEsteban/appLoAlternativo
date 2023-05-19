import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { EventosService } from '../../../services/eventos.service';
import { EspecialistasService } from '../../../services/especialistas.service';
import { RespuestaEventos } from '../../../interfaces/eventos-respuesta.interface';
import { Evento } from '../../models/evento.model';

@Component({
  selector: 'app-tabla-eventos',
  templateUrl: './tabla-eventos.component.html',
  styleUrls: ['./tabla-eventos.component.scss']
})
export class TablaEventosComponent implements OnInit {

  @Output()eventoSelection=new EventEmitter<Evento>()
  
  eventos:Evento[]=[];

  constructor(private eventosService:EventosService,
              private especialistasService:EspecialistasService
              ) { }

  ngOnInit(): void {

    this.eventosService.getEventos(this.especialistasService.especialista.id)
      .subscribe((res:RespuestaEventos)=>{  
        console.log(res)      
        this.eventos=res.eventos;
        //console.log(this.eventos)
      })

  }

  filaSelected(event:Evento){
    this.eventoSelection.emit(event);
  }



}
