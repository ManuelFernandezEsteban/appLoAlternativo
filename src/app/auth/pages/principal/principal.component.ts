import { Component, Input, OnInit } from '@angular/core';
import { DataEspecialistasService } from '../../../services/data-especialistas.service';
import { Especialista } from '../../models/user.models';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

 especialista!: Especialista;

  constructor(private dataEspecialistasService:DataEspecialistasService) { 
    
  }

  ngOnInit(): void {
    this.dataEspecialistasService.getEspecialista().subscribe(res=>{
      this.especialista=res;
    });    
    
  }

}
