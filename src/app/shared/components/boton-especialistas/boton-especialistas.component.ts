import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boton-especialistas',
  templateUrl: './boton-especialistas.component.html',
  styleUrls: ['./boton-especialistas.component.scss']
})
export class BotonEspecialistasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onScroll(){
    window.scrollTo(0,0);
  }
}
