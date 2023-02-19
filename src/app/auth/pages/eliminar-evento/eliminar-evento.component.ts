import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { TablaEventosService } from 'src/app/services/tabla-eventos.service';
import { ServiceModalEventoService } from 'src/app/services/service-modal-evento.service';


import { EventosService } from '../../../services/eventos.service';
import { UploadsService } from '../../../services/uploads.service';

@Component({
  selector: 'app-eliminar-evento',
  templateUrl: './eliminar-evento.component.html',
  styleUrls: ['./eliminar-evento.component.scss']
})
export class EliminarEventoComponent implements OnInit {
  tipo:string="Eliminar"
  mensaje: string = '¿Seguro qué desea borrar el evento?';

  
    
  constructor(public tablaEventosService: TablaEventosService,
  
    private route: Router,
    public serviceModal: ServiceModalEventoService,
    private eventosService: EventosService,
    private uploadsService:UploadsService
  ) {

  }

  ngOnInit(): void {
    
  }

  desactivarSelected() {
    this.tablaEventosService.setIsSelectedOnFalse();
    this.tablaEventosService.resetEventoSelected();
  }
  async onDelete() {
    await this.serviceModal.openDialog().then(res => {

    });


  }

  cerrar() {    

    this.eventosService.eliminarEvento(this.tablaEventosService.getEventoSelected().id)
      .subscribe(res => {
        this.uploadsService.deleteEvento(this.tablaEventosService.getEventoSelected().id).subscribe(res=>{

        },err=>{Swal.fire('Error',err.error.msg,'error');})
        
        this.serviceModal.closeDialog();
        this.route.navigate(['auth/principal/']);
      }, err => {
        Swal.fire('Error',err.error.msg,'error');
      });

  }

  onReset() {
    this.desactivarSelected();
    this.route.navigate(['auth/principal/']);
  }


}
