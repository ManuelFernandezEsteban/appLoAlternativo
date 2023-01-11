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

 // especialista!:Especialista;

  constructor(public dataEspecialistasService:DataEspecialistasService,
              private http:Router) { }

  ngOnInit(): void {

  }

  onClickPlata(){
    this.dataEspecialistasService.especialista.plan_contratado='plata';
    
    
    this.http.navigate(['auth/principal/datos']);
  }

  onClickOro(){
    this.dataEspecialistasService.especialista.plan_contratado='oro';
    
    this.http.navigate(['auth/principal/datos']);
  }

}
