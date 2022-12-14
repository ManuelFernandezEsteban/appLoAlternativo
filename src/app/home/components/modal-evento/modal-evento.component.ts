import { Component, Input, OnInit } from '@angular/core';
import { Evento } from '../../../interfaces/eventos';
import { ServiceModalEventoService } from '../../../services/service-modal-evento.service';

@Component({
  selector: 'app-modal-evento',
  templateUrl: './modal-evento.component.html',
  styleUrls: ['./modal-evento.component.scss']
})
export class ModalEventoComponent implements OnInit {
  @Input()
  evento!: Evento;

  

  constructor(private serviceModalEventoService:ServiceModalEventoService) { }

  ngOnInit(): void {
    
  }

  cerrarModal(){
     this.serviceModalEventoService.closeDialog();
  }

}
