import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataEspecialistasService } from '../../../services/data-especialistas.service';
import { Router } from '@angular/router';
import { Especialista } from '../../models/user.models';

@Component({
  selector: 'app-planes',
  templateUrl: './planes.component.html',
  styleUrls: ['./planes.component.scss']
})
export class PlanesComponent implements OnInit {

  especialista!:Especialista;

  constructor(private dataEspecialistasService:DataEspecialistasService,
              private http:Router) { }

  ngOnInit(): void {
    this.dataEspecialistasService.getEspecialista().subscribe(res=>{
      this.especialista=res;
    })
    
    console.log(this.dataEspecialistasService.especialista)
  }

  onClickPlata(){
    this.especialista.plan_contratado='plata';
    this.dataEspecialistasService.setEspecialista(this.dataEspecialistasService.especialista);
    
    this.http.navigate(['auth/principal/datos']);
  }

  onClickOro(){
    this.especialista.plan_contratado='oro';
    this.dataEspecialistasService.setEspecialista(this.dataEspecialistasService.especialista);
   
    console.log(this.dataEspecialistasService.especialista);
    this.http.navigate(['auth/principal/datos']);
  }

}
