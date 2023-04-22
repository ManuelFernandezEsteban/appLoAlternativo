import { Component, OnInit } from '@angular/core';
import { EventosService } from 'src/app/services/eventos.service';
import { TablaEventosService } from '../../../services/tabla-eventos.service';
import { Evento } from '../../models/evento.model';
import { ComprasEventosNoFinalizada, ComprasEventosNoFinalizadas } from '../../../interfaces/compras_eventos.interface';

@Component({
  selector: 'app-ventas-evento',
  templateUrl: './ventas-evento.component.html',
  styleUrls: ['./ventas-evento.component.scss']
})
export class VentasEventoComponent implements OnInit {

  evento:Evento;
  eventosVendidos:ComprasEventosNoFinalizada[];
  constructor(private eventosService:EventosService,private tablaEventosService:TablaEventosService) { }

  ngOnInit(): void {

    this.evento=this.tablaEventosService.getEventoSelected();

    this.eventosService.getEventosVendidos(this.evento.id).subscribe(res=>{
      
      this.eventosVendidos=res.compras_eventos_no_finalizadas;

    })
    
  }

}
