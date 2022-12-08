import { Component, OnInit ,Input} from '@angular/core';
import { Especialidad } from 'src/app/interfaces/especialiadad';

@Component({
  selector: 'app-directorio',
  templateUrl: './directorio.component.html',
  styleUrls: ['./directorio.component.scss']
})
export class DirectorioComponent implements OnInit {
  
  @Input() especialidades:Especialidad[]=[];

  constructor() { }

  ngOnInit(): void {
  }

}
