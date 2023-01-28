import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataEspecialistasService } from '../../../services/data-especialistas.service';
import { Router } from '@angular/router';
import { Especialista } from '../../models/user.models';
import { EspecialistasService } from '../../../services/especialistas.service';

@Component({
  selector: 'app-planes',
  templateUrl: './planes.component.html',
  styleUrls: ['./planes.component.scss']
})
export class PlanesComponent implements OnInit {

 // especialista!:Especialista;

  constructor(private especialistaService:EspecialistasService,
              private http:Router) { }

  ngOnInit(): void {

  }

  onClickPlata(){
    this.especialistaService.cambiarPlan(1).subscribe(res=>{
      this.http.navigate(['auth/principal/datos']);
    })
    
    
  }

  onClickOro(){

    this.especialistaService.cambiarPlan(2).subscribe(res=>{
      this.http.navigate(['auth/principal/datos']);
    });   
    
    
  }

}
