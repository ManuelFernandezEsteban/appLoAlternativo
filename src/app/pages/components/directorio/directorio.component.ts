import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Especialidad } from '../../../interfaces/especiliadad';

@Component({
  selector: 'app-directorio',
  templateUrl: './directorio.component.html',
  styleUrls: ['./directorio.component.scss']
})
export class DirectorioComponent implements OnInit {

  @Input() especialidades:Especialidad[]=[];

  constructor() { }

  ngOnInit(): void {
    console.log(this.especialidades)
  }

}
