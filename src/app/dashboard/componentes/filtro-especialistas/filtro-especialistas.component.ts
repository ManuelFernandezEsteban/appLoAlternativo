import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IEspecialista } from 'src/app/interfaces/especialistas';

@Component({
  selector: 'app-filtro-especialistas',
  templateUrl: './filtro-especialistas.component.html',
  styleUrls: ['./filtro-especialistas.component.scss']
})
export class FiltroEspecialistasComponent implements OnInit {

  @Input()
  listaEspecialistas: IEspecialista[]=[]; 

  @Output() onBuscar = new EventEmitter<IEspecialista[]>();
  @Output() onReset = new EventEmitter<boolean>();
  
  nombre:string='';
  provincia:string='';

  constructor() { }

  ngOnInit(): void {    
    console.log( this.listaEspecialistas)
  }
  
  reset(){
    this.nombre='';
    this.provincia='';
    this.onReset.emit(true);
  }

  onClickBuscar() {
    let seleccionados:IEspecialista[] = [];
    // cada vez que el valor del elemento input cambia
    //vacia el array de los nombres seleccionados
    //recupera el valor del input y guardalo en una variable
    let nombre = this.nombre.trim().toLowerCase();
    let provincia = this.provincia.trim().toLowerCase(); 
     
    //si hay un valor
    if (nombre.length > 0) {
      // busca en el json si el nombre incluye (o empieza por) el valor
      this.listaEspecialistas.forEach(j => {               
        if (j.nombre.toLocaleLowerCase().includes(nombre) || j.apellidos.toLocaleLowerCase().includes(nombre)) {

          if (provincia.length>0){
            if (j.provincia.toLocaleLowerCase().includes(provincia)){
              seleccionados.push(j);
            }
          }else{
            seleccionados.push(j);
          }
        }
      });
    }else if (provincia.length>0){
      this.listaEspecialistas.forEach(j => {       
        
        if (j.provincia.toLocaleLowerCase().includes(provincia)) {
         
            seleccionados.push(j);         
            // si lo incluye agregalo al array de los seleccionados
          
        }
      });
    }else{
      seleccionados=this.listaEspecialistas;
    }
    this.onBuscar.emit(seleccionados);
    
  }

}
