import { Component, OnInit } from '@angular/core';
import { TablaEventosService } from '../../../services/tabla-eventos.service';
import { PlanesService } from '../../../services/planes.service';
import { EspecialistasService } from '../../../services/especialistas.service';
import { RespuestaEspecialista } from 'src/app/interfaces/respuesta-especialista.interface';
import { Especialistas } from '../../../interfaces/especialistas';
import { Especialista } from '../../models/especialista.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit { 
  
  constructor(public tablaEventosService: TablaEventosService,
    public especialistaService: EspecialistasService) { }

  ngOnInit(): void {
    
  }

  esOro():boolean{
    let fechaFin= new Date(this.especialistaService.especialista.fecha_fin_suscripcion);
    let hoy = new Date(Date.now());
    return (fechaFin>=hoy)
  }


  desactivarSelected() {
    this.tablaEventosService.setIsSelectedOnFalse();
    this.tablaEventosService.resetEventoSelected();
  }

  habilitar(): string {
    let clase: string = '';

    if (this.tablaEventosService.isSelected()) {
      clase = '';
    } else {
      clase = 'disabled'
    }
    return clase;
  }

}
