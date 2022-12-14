import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Especialidad } from 'src/app/interfaces/especialiadad';

@Component({
  selector: 'app-buscador-especialista',
  templateUrl: './buscador-especialista.component.html',
  styleUrls: ['./buscador-especialista.component.scss']
})
export class BuscadorEspecialistaComponent implements OnInit {
  especialidad!: Especialidad;

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params=>{
      
      this.especialidad=params as Especialidad;
    });
  }
   

}
