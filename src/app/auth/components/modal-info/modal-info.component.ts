import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ServiceModalEventoService } from 'src/app/services/service-modal-evento.service';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.component.html',
  styleUrls: ['./modal-info.component.scss']
})
export class ModalInfoComponent implements OnInit {

  @Input()mensaje:string='';

  @Input()borrar:boolean=false;


  @Output()onAceptar=new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  aceptar(){

    this.onAceptar.emit(true);

  }

  cancelar(){
    this.onAceptar.emit(false);
  }

}
