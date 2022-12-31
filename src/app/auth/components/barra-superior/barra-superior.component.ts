import { Component, Input, OnInit } from '@angular/core';
import { Especialista } from '../../../interfaces/especialistas';
import { DataEspecialistasService } from '../../../services/data-especialistas.service';

@Component({
  selector: 'app-barra-superior',
  templateUrl: './barra-superior.component.html',
  styleUrls: ['./barra-superior.component.scss']
})
export class BarraSuperiorComponent implements OnInit {

  @Input()especialista!:Especialista;

  constructor ( private dataEspecialistasService:DataEspecialistasService) { }

  ngOnInit(): void {    
   
    console.log(this.especialista)
  }

}
