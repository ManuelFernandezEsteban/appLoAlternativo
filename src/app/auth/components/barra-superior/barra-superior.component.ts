import { Component, OnInit } from '@angular/core';
import { EspecialistasService } from '../../../services/especialistas.service';
import { Router } from '@angular/router';
import { PlanesService } from '../../../services/planes.service';
import { ResPlan } from '../../interfaces/plan.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-barra-superior',
  templateUrl: './barra-superior.component.html',
  styleUrls: ['./barra-superior.component.scss']
})
export class BarraSuperiorComponent implements OnInit {

  private _plan:string='';


  constructor ( private router:Router,
                public especialistaService:EspecialistasService,
                private planesService:PlanesService
                ) { }

  ngOnInit(): void {  

    const fecha_fin = new Date(this.especialistaService.especialista.fecha_fin_suscripcion);

    this.planesService.getPlan(this.especialistaService.especialista.PlaneId)
      .subscribe((res:ResPlan)=>{
        if (fecha_fin> new Date(Date.now())){
          this._plan='ORO'
        }else{
          this._plan=res.plan.nombre;
        }                
      })     
  }

  cerrarSesion(){
    this.especialistaService.logOut();
    this.router.navigateByUrl('/');

  }
}
