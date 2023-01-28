import { Component, OnInit } from '@angular/core';
import { EspecialistasService } from '../../../services/especialistas.service';
import { Router } from '@angular/router';
import { PlanesService } from '../../../services/planes.service';
import { ResPlan } from '../../interfaces/plan.interface';

@Component({
  selector: 'app-barra-superior',
  templateUrl: './barra-superior.component.html',
  styleUrls: ['./barra-superior.component.scss']
})
export class BarraSuperiorComponent implements OnInit {

  plan:string='';


  constructor ( private router:Router,
                public especialistaService:EspecialistasService,
                private planesService:PlanesService
                ) { }

  ngOnInit(): void {  

    this.planesService.getPlan(this.especialistaService.especialista.PlaneId)
      .subscribe((res:ResPlan)=>{
        this.plan=res.plan.nombre        
      })
    this.plan   
  }

  cerrarSesion(){
    this.especialistaService.logOut();
    this.router.navigateByUrl('/');

  }
}
