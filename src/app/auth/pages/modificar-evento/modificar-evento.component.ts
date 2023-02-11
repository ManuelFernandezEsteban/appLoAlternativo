import { Component, OnInit } from '@angular/core';
import { TablaEventosService } from 'src/app/services/tabla-eventos.service';
import { Router } from '@angular/router';
import { ServiceModalEventoService } from 'src/app/services/service-modal-evento.service';
import { EventosService } from '../../../services/eventos.service';
import Swal from 'sweetalert2';
import { IEvento } from '../../../interfaces/eventos';

@Component({
  selector: 'app-modificar-evento',
  templateUrl: './modificar-evento.component.html',
  styleUrls: ['./modificar-evento.component.scss']
})
export class ModificarEventoComponent implements OnInit {
  
  mensaje: string = 'Evento modificado'; 
  tipo:string='Modificar' 

  constructor(public tablaEventosService: TablaEventosService,
    private route: Router,
    public dataServiceModal: ServiceModalEventoService,
    private eventosService: EventosService) {    
  }

  ngOnInit(): void {
  
  }

  desactivarSelected() {
    this.tablaEventosService.setIsSelectedOnFalse();
    this.tablaEventosService.resetEventoSelected();
  }

  onModify(event:IEvento) {

    this.eventosService.actualizarEvento(event)
      .subscribe(res => {

        this.desactivarSelected();
        this.dataServiceModal.openDialog();
      }, err => {
        Swal.fire('Error',err.error.msg,'error');
      });
  }

  cerrar() {
    this.dataServiceModal.closeDialog();
    this.route.navigate((['auth/principal/']))
  }

  onReset() {
    this.desactivarSelected();
    this.route.navigate((['auth/principal/']))
  }

}
