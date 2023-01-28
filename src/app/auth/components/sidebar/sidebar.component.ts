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

  esOro: boolean = false;

  especialista: Especialista;


  constructor(public tablaEventosService: TablaEventosService,
    public especialistaService: EspecialistasService) { }

  ngOnInit(): void {


    if (this.especialistaService.especialista.PlaneId === 1) {
      this.esOro = false;
    } else {
      this.esOro = true;
    }


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
