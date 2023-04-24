import { Component, OnInit } from '@angular/core';
import { EspecialistasService } from '../../../services/especialistas.service';

@Component({
  selector: 'app-crear-cuenta-conectada',
  templateUrl: './crear-cuenta-conectada.component.html',
  styleUrls: ['./crear-cuenta-conectada.component.scss']
})
export class CrearCuentaConectadaComponent implements OnInit {

  yaCreada:boolean=false;

  constructor(private especialistasService:EspecialistasService) { }

  ngOnInit(): void {

    
  }

  crearCuentaConectada(){

  }

}
