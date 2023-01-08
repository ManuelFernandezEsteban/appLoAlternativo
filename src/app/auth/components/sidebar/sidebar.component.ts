import { Component, Input, OnInit } from '@angular/core';
import { TablaEventosService } from '../../../services/tabla-eventos.service';
import { Especialista } from '../../models/user.models';
import { DataEspecialistasService } from '../../../services/data-especialistas.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  

  constructor(public tablaEventosService: TablaEventosService,private dataEspecialistasService:DataEspecialistasService) { }

  ngOnInit(): void {

  }

  esOro():boolean{   
      return this.dataEspecialistasService.especialista.plan_contratado==='oro'
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
