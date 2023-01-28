import { Component, OnInit } from '@angular/core';
import { TablaEventosService } from '../../../services/tabla-eventos.service';
import { PlanesService } from '../../../services/planes.service';
import { EspecialistasService } from '../../../services/especialistas.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  esOro:boolean=false;
  

  constructor(public tablaEventosService: TablaEventosService,
              private planesService:PlanesService,
              private especialistaService:EspecialistasService) 
              { }

  ngOnInit(): void {
    this.planesService.getPlan( (this.especialistaService.especialista.PlaneId) )
        .subscribe(res=>{
          if (res.plan.nombre==='oro'){
            this.esOro=true;
          }
          else {
            this.esOro=false;
          }
        })
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
