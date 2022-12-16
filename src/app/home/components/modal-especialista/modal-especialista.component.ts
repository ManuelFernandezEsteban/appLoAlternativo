import { Component, Input, OnInit } from '@angular/core';
import { Especialista } from '../../../interfaces/especialistas';
import { ServiceModalEventoService } from '../../../services/service-modal-evento.service';

@Component({
  selector: 'app-modal-especialista',
  templateUrl: './modal-especialista.component.html',
  styleUrls: ['./modal-especialista.component.scss']
})
export class ModalEspecialistaComponent implements OnInit {

  @Input()
  especialista!: Especialista;

  constructor(private serviceModalEventoService:ServiceModalEventoService) { }

  ngOnInit(): void {
    console.log(this.especialista)
  }

  cerrarModal(){
    this.serviceModalEventoService.closeDialog();
  }
}
