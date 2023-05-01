import { Component, OnInit } from '@angular/core';
import { TablaEventosService } from '../../../services/tabla-eventos.service';
import { EspecialistasService } from '../../../services/especialistas.service';
import { Status, Suscripcion } from '../../../interfaces/suscripcion';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit { 
  esOro:boolean=false;

  constructor(public tablaEventosService: TablaEventosService,
    public especialistaService: EspecialistasService) { }

  ngOnInit(): void {
    //plan plata =>1

    if (this.especialistaService.especialista.PlaneId!=1){
      this.especialistaService.getSubscription().subscribe(
      (res:Suscripcion)=>{
        if (res.status===Status.canceled){
          this.esOro=false;
        }else{
          this.esOro=true;
        }
      },
      err=>{
        //console.log(err)
      })
    }else{
      this.esOro=false;
      
    }
    
  }


  desactivarSelected() {
    this.tablaEventosService.setIsSelectedOnFalse();
    this.tablaEventosService.resetEventoSelected();
  }

  habilitar(): string {
    let clase: string = '';

    if (this.tablaEventosService.isSelected()) {
      clase = '';
    } else {
      clase = 'disabled'
    }
    return clase;
  }

  tieneVentas():boolean{

    if (this.especialistaService.especialista.cuentaConectada) {
      return true;
    }else{
      return false;
    }
  }

}
