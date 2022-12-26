import { Component, Input, OnInit } from '@angular/core';
import { Especialista } from '../../../interfaces/especialistas';

@Component({
  selector: 'app-barra-superior',
  templateUrl: './barra-superior.component.html',
  styleUrls: ['./barra-superior.component.scss']
})
export class BarraSuperiorComponent implements OnInit {

  @Input()terapeuta!:Especialista;

  constructor() { }

  ngOnInit(): void {
  }

}
