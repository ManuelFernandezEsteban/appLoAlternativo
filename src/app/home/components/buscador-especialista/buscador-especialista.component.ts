import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Especialidad } from 'src/app/interfaces/especialiadad';
import { Especialista, Especialistas } from '../../../interfaces/especialistas';
import { DataEspecialistasService } from '../../../services/data-especialistas.service';

@Component({
  selector: 'app-buscador-especialista',
  templateUrl: './buscador-especialista.component.html',
  styleUrls: ['./buscador-especialista.component.scss']
})
export class BuscadorEspecialistaComponent implements OnInit {
  especialidad!: Especialidad;
  listaEntrada:Especialista[]=[];
  listaResultado:Especialista[]=[];

  constructor(private route:ActivatedRoute,) { }


  ngOnInit(): void {
    this.route.queryParams.subscribe(params=>{
      
      this.especialidad=params as Especialidad;     
    });


  }

  resultado(listaResultado:Especialista[]){
    this.listaResultado=listaResultado;
  }
   

}
