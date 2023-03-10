import { Component, Input, OnInit } from '@angular/core';
import { EspecialistaClass } from 'src/app/interfaces/especialistas';
import { DataEspecialistasService } from 'src/app/services/data-especialistas.service';
import { ServiceModalEventoService } from 'src/app/services/service-modal-evento.service';
import { EspecialistasService } from '../../../services/especialistas.service';
import { EspecialistasActividad } from '../../../interfaces/especialistas-actividad.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-resultado-busqueda-especialistas',
  templateUrl: './resultado-busqueda-especialistas.component.html',
  styleUrls: ['./resultado-busqueda-especialistas.component.scss']
})
export class ResultadoBusquedaEspecialistasComponent implements OnInit {

  @Input() especialidad!: number;
  isVisible: boolean = false;
  lista: EspecialistaClass[] = [];
  listaResultado:EspecialistaClass[]=[];
  especialistaAMostrar!: EspecialistaClass;
  paginaActual: number = 1;
  numeroDePaginas: number = 0;
  numeroTotalEspecialistas: number = 0;
  nombre:string='';
  provincia:string='';
  pagina:number=0;


  constructor(public serviceDataEspecialistas: DataEspecialistasService,
    public serviceModalEventoService: ServiceModalEventoService,
    public especialistasServices: EspecialistasService) { }

  ngOnInit(): void {

    this.traerEspecialistas();    
  }

  reset() {
    this.nombre='';
    this.provincia='';
    this.paginaActual=1;
    this.traerEspecialistas();
    
  }

  toggleFiltros() {
    this.isVisible = !this.isVisible;
  }

  especialistaSeleccionado(event: EspecialistaClass) {
    this.especialistaAMostrar = event;
    this.serviceModalEventoService.openDialog();
  }

  traerEspecialistas() {    
    this.especialistasServices.getEspecialistasActividad(this.especialidad)
      .subscribe((res: EspecialistasActividad) => {
        //console.log(res.especialistas);
        this.listaResultado=res.especialistas;
        this.numeroTotalEspecialistas=res.count;
        this.paginaActual=1;
        if (this.numeroTotalEspecialistas === 5) {
          this.numeroDePaginas = 1;
        } else if ((this.numeroTotalEspecialistas % 5)===0) {
    
          this.numeroDePaginas = Math.floor(this.numeroTotalEspecialistas / 5);
        }else{
          this.numeroDePaginas = Math.floor(this.numeroTotalEspecialistas / 5)+1;
        }

      }, (err) => {
        Swal.fire('Error', err.error.msg, 'error');
      });
  }

  moverPagina(event:number){
    this.pagina=event;
  }

  onClickBuscar(){}

  onReset(){
    this.reset();
  }

anterior(){
  this.pagina-=5;
  this.paginaActual--
}

siguiente(){
  this.pagina+=5;
  this.paginaActual++
}

}
