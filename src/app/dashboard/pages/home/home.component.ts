import { Component, OnInit } from '@angular/core';
import { Evento, Eventos } from 'src/app/interfaces/eventos';
import { ServiceModalEventoService } from 'src/app/services/service-modal-evento.service';
import { DataEventosService } from '../../../services/data-eventos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  eventoAMostrar!: Evento;
  mostrarModal:boolean=false;
  eventos:Evento[]=[];

  constructor(private dataEventos:DataEventosService,public serviceModalEventoService:ServiceModalEventoService,) { }

  ngOnInit(): void {
    this.dataEventos.getEventosAlernativo<Eventos>().subscribe(res=>{
      this.eventos=res.eventos;
    })
  }
  eventoSeleccionado(event:Evento){
    this.eventoAMostrar=event;
    if(this.eventoAMostrar.id===0){
      this.serviceModalEventoService.showDialogRevista=true;
    }
    this.serviceModalEventoService.openDialog();
  }
}
