import { Component, OnInit } from '@angular/core';
import { ServiceModalEventoService } from 'src/app/services/service-modal-evento.service';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.component.html',
  styleUrls: ['./modal-info.component.scss']
})
export class ModalInfoComponent implements OnInit {

  constructor(private serviceModalEventoService: ServiceModalEventoService) { }

  ngOnInit(): void {
  }

  aceptar(){

    this.serviceModalEventoService.closeDialog();

  }

}
