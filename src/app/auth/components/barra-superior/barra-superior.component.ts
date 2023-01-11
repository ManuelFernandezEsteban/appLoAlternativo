import { Component, Input, OnInit } from '@angular/core';
import { Especialista } from '../../models/user.models';
import { DataEspecialistasService } from '../../../services/data-especialistas.service';

@Component({
  selector: 'app-barra-superior',
  templateUrl: './barra-superior.component.html',
  styleUrls: ['./barra-superior.component.scss']
})
export class BarraSuperiorComponent implements OnInit {



  constructor ( public dataEspecialistasService:DataEspecialistasService) { }

  ngOnInit(): void {       
   
  }

}
