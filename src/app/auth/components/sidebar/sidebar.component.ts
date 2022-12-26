import { Component, Input, OnInit } from '@angular/core';
import { TablaEventosService } from '../../../services/tabla-eventos.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input()idTerapeuta:number=0;

  constructor(public tablaEventosService:TablaEventosService) { }

  ngOnInit(): void {
  }

}
