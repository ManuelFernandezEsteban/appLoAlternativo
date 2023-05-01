import { Component, OnInit } from '@angular/core';
import { EspecialistasService } from '../../../services/especialistas.service';
import { AccountLink, Link } from '../../../interfaces/accountLink.interface';


@Component({
  selector: 'app-crear-cuenta-conectada',
  templateUrl: './crear-cuenta-conectada.component.html',
  styleUrls: ['./crear-cuenta-conectada.component.scss']
})
export class CrearCuentaConectadaComponent implements OnInit {

  yaCreada:boolean=false;

  constructor(private especialistasService:EspecialistasService) { }

  ngOnInit(): void {

    if (this.especialistasService.especialista.cuentaConectada){
      this.especialistasService.getAccount().subscribe(res=>{        
        this.yaCreada=res.cuenta.charges_enabled;        
      })
    }else{
      console.log('no creada')
    }
  }

  crearCuentaConectada(){
    this.especialistasService.crearCuentaConectada()
      .subscribe(
        (res:AccountLink)=>{
          const link =res.link.accountLink.url;
          window.open(link,'blank');
        },
        err=>{
          console.log(err)
        })

  }

}
