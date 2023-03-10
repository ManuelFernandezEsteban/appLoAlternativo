import { Component, OnInit } from '@angular/core';
import { TablaEventosService } from '../../../services/tabla-eventos.service';
import { EspecialistasService } from '../../../services/especialistas.service';

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
