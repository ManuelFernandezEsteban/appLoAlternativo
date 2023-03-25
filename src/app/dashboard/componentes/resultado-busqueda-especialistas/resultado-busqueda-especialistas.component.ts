import { Component, Input, OnInit } from '@angular/core';
import { EspecialistaClass } from 'src/app/interfaces/especialistas';
import { DataEspecialistasService } from 'src/app/services/data-especialistas.service';
import { ServiceModalEventoService } from 'src/app/services/service-modal-evento.service';
import { EspecialistasService } from '../../../services/especialistas.service';
import { EspecialistasActividad } from '../../../interfaces/especialistas-actividad.interface';
import Swal from 'sweetalert2';
import { Herramienta, Herramientas, HerramientasResp } from '../../../interfaces/especialidad';
import { HerramientasService } from '../../../services/herramientas.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-resultado-busqueda-especialistas',
  templateUrl: './resultado-busqueda-especialistas.component.html',
  styleUrls: ['./resultado-busqueda-especialistas.component.scss']
})
export class ResultadoBusquedaEspecialistasComponent implements OnInit {

  @Input() especialidad!: number;
  isVisible: boolean = false;
  sinFiltros:boolean = false;
  lista: EspecialistaClass[] = [];
  listaResultado:EspecialistaClass[]=[];
  especialistaAMostrar!: EspecialistaClass;
  paginaActual: number = 1;
  numeroDePaginas: number = 0;
  numeroTotalEspecialistas: number = 0;
  nombre:string='';
  provincia:string='';
  pagina:number=0;
  herramientas:Herramienta[]=[];
  formFiltros=this.fb.group({
    herramientas:[],
    provincia:['']
  })


  constructor(public serviceDataEspecialistas: DataEspecialistasService,
    public serviceModalEventoService: ServiceModalEventoService,
    public especialistasServices: EspecialistasService,
    private herramientasService:HerramientasService,
    private fb:FormBuilder) { }

  ngOnInit(): void {

    this.herramientasService.getHerramientasByActividad<Herramientas>(this.especialidad)
      .subscribe(res=>{
       
        this.herramientas=res.herramientas;
        if(this.herramientas){
          if (this.herramientas.length>0){
            this.sinFiltros=true;
         }          
        }      
      })

    this.traerEspecialistas();    
  }

  reset() {
    this.formFiltros.reset();
    
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
        this.listaResultado=res.especialistas;
        this.numeroTotalEspecialistas=this.listaResultado.length;
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

  onClickBuscar(){    

    this.herramientasService.getEspecialistasByHerramientas<EspecialistasActividad>(this.especialidad,this.formFiltros.value)
      .subscribe(res=>{
      this.listaResultado=res.especialistas;
      this.numeroTotalEspecialistas=this.listaResultado.length;
        this.paginaActual=1;
        if (this.numeroTotalEspecialistas === 5) {
          this.numeroDePaginas = 1;
        } else if ((this.numeroTotalEspecialistas % 5)===0) {
    
          this.numeroDePaginas = Math.floor(this.numeroTotalEspecialistas / 5);
        }else{
          this.numeroDePaginas = Math.floor(this.numeroTotalEspecialistas / 5)+1;
        }
        
        this.listaResultado=res.especialistas
        console.log(this.listaResultado)
    },(error)=>{
      console.log(error)
    })

  }

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
